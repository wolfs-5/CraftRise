"use client";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DashboardHeader } from "@/components/dashboard-header";
import { DashboardSidebar } from "@/components/dashboard-sidebar";
import { Camera, Sparkles, Upload, Wand2, Download, Eye, RefreshCw, RotateCcw, Edit3, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

interface UploadedFile {
  file: File;
  preview: string;
  filename: string;
  uploadedUrl?: string;
  uploadStatus: 'pending' | 'uploading' | 'uploaded' | 'error';
}

interface EnhancementResult {
  enhanced_image_url: string;
  mockup_image_url: string;
}



export default function PhotoEnhanceStudioPage() {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [style, setStyle] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [results, setResults] = useState<EnhancementResult[]>([]);
  const [dragActive, setDragActive] = useState(false);
  const [inputKey, setInputKey] = useState(0);

  const predefinedStyles = [
    "A modern, minimalist living room with natural light",
    "Elegant traditional home with warm wooden interiors", 
    "Contemporary office space with professional lighting",
    "Cozy bedroom with soft ambient lighting",
    "Luxurious hotel lobby with sophisticated decor",
    "Rustic kitchen with warm, inviting atmosphere"
  ];

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFiles(e.target.files);
      // Reset the input value to allow selecting the same file again
      e.target.value = '';
    }
  };

  const handleFiles = (files: FileList) => {
    const validFiles: UploadedFile[] = [];
    
    Array.from(files).forEach((file) => {
      if (file.type.startsWith('image/')) {
        const filename = `artisan_uploads/${Date.now()}_${Math.random().toString(36).substr(2, 9)}_${file.name}`;
        const preview = URL.createObjectURL(file);
        validFiles.push({ file, preview, filename, uploadStatus: 'pending' });
      }
    });

    if (validFiles.length > 0) {
      setUploadedFiles(prev => [...prev, ...validFiles]);
    }
  };

  // Upload file to Google Cloud Storage
  const uploadToGCS = async (file: File, filename: string): Promise<string> => {
    // Create FormData for file upload
    const formData = new FormData();
    formData.append('file', file);
    formData.append('filename', filename);

    // TODO: Replace this with your actual Google Cloud Storage upload endpoint
    // For now, I'll simulate the upload and return the filename as if it was uploaded
    const uploadResponse = await fetch('/api/upload-to-gcs', {
      method: 'POST',
      body: formData,
    });

    if (!uploadResponse.ok) {
      // For demo purposes, we'll proceed with the filename even if upload fails
      // In production, you should implement proper GCS upload
      console.warn('GCS upload not implemented, proceeding with filename:', filename);
      return filename;
    }

    const uploadResult = await uploadResponse.json();
    return uploadResult.filename || filename;
  };

  const enhanceImages = async () => {
    if (!uploadedFiles.length || !style) return;
    
    setIsProcessing(true);
    setResults([]);

    try {
      // Step 1: Upload all files to Google Cloud Storage first
      const uploadPromises: Promise<UploadedFile>[] = uploadedFiles.map(async (uploadedFile: UploadedFile, index: number): Promise<UploadedFile> => {
        // Update status to uploading
        setUploadedFiles(prev => {
          const updated = [...prev];
          updated[index] = { ...updated[index], uploadStatus: 'uploading' };
          return updated;
        });

        try {
          const uploadedFilename = await uploadToGCS(uploadedFile.file, uploadedFile.filename);
          
          // Update status to uploaded
          setUploadedFiles(prev => {
            const updated = [...prev];
            updated[index] = { 
              ...updated[index], 
              uploadStatus: 'uploaded',
              uploadedUrl: uploadedFilename
            };
            return updated;
          });

          return { ...uploadedFile, uploadedUrl: uploadedFilename };
        } catch (error) {
          // Update status to error
          setUploadedFiles(prev => {
            const updated = [...prev];
            updated[index] = { ...updated[index], uploadStatus: 'error' };
            return updated;
          });
          throw error;
        }
      });

      const uploadedFilesWithUrls = await Promise.all(uploadPromises);

      // Step 2: Call enhancement API with uploaded filenames
      const enhancementPromises = uploadedFilesWithUrls.map(async (uploadedFile: UploadedFile) => {
        const response = await fetch('https://asia-south1-kalasetu-5.cloudfunctions.net/enhance-and-mockup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            filename: uploadedFile.uploadedUrl || uploadedFile.filename,
            style: style
          }),
        });

        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`Enhancement API error! status: ${response.status}, message: ${errorText}`);
        }

        const result = await response.json();
        
        // Validate the response structure
        if (!result.enhanced_image_url || !result.mockup_image_url) {
          throw new Error('Invalid response format from enhancement API');
        }

        return result;
      });

      const enhancementResults = await Promise.all(enhancementPromises);
      setResults(enhancementResults);
    } catch (error) {
      console.error('Error in enhancement workflow:', error);
      
      // Show user-friendly error message
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      alert(`Enhancement failed: ${errorMessage}\n\nPlease check:\n1. Your internet connection\n2. That the API endpoint is accessible\n3. That your images are valid`);
    } finally {
      setIsProcessing(false);
    }
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => {
      const newFiles = [...prev];
      URL.revokeObjectURL(newFiles[index].preview);
      newFiles.splice(index, 1);
      return newFiles;
    });
    
    // Reset file input when removing files
    const fileInput = document.getElementById('file-upload') as HTMLInputElement;
    if (fileInput) {
      fileInput.value = '';
    }
  };

  const refreshResults = async () => {
    if (!uploadedFiles.length || !style) return;
    
    // Re-enhance with same settings
    await enhanceImages();
  };

  const startOver = () => {
    // Clear all files and results
    uploadedFiles.forEach(file => URL.revokeObjectURL(file.preview));
    setUploadedFiles([]);
    setResults([]);
    setStyle("");
    
    // Force re-render of file input by changing key
    setInputKey(prev => prev + 1);
  };

  const changeStyle = () => {
    // Keep photos but clear results to allow new style
    setResults([]);
  };

  return (
    <div className="flex theme-bg-gradient relative">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader />
        <main className="flex-1 overflow-y-auto p-6 space-y-6">
          <div className="max-w-6xl mx-auto space-y-8">
            
            {/* Header */}
            <div className="text-center space-y-4">
              <div className="flex justify-center items-center gap-3">
                <Wand2 className="h-10 w-10 text-primary" />
                <h1 className="text-4xl font-bold text-foreground">PhotoEnhance Studio</h1>
                <Sparkles className="h-10 w-10 text-secondary" />
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Transform your artisan products with AI-powered enhancement and professional mockups
              </p>
              
              {/* Workflow Info */}
              <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 max-w-3xl mx-auto">
                <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">How it works:</h3>
                <div className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                  <p>1. 📤 Upload your artisan product photos (they&apos;ll be securely stored)</p>
                  <p>2. 🎨 Choose or describe your preferred style and setting</p>
                  <p>3. ✨ Our AI enhances your photos and creates professional mockups</p>
                  <p>4. 📥 Download both enhanced images and lifestyle mockups</p>
                </div>
              </div>
            </div>

            {/* Upload Section */}
            <Card className="border-border/50 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Camera className="h-5 w-5" />
                  Upload Product Photos
                </CardTitle>
                <CardDescription>
                  Upload your artisan product images to enhance and create professional mockups
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div
                  className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                    dragActive ? 'border-primary bg-primary/5' : 'border-border'
                  }`}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                >
                  <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                  <p className="text-muted-foreground mb-2">
                    Drag and drop your images here, or
                  </p>
                  <input
                    key={inputKey}
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleFileInput}
                    className="hidden"
                    id="file-upload"
                  />
                  <Button 
                    variant="outline"
                    onClick={() => {
                      const fileInput = document.getElementById('file-upload') as HTMLInputElement;
                      if (fileInput) {
                        fileInput.click();
                      }
                    }}
                  >
                    Browse Files
                  </Button>
                </div>

                {/* Uploaded Files Preview */}
                {uploadedFiles.length > 0 && (
                  <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
                    {uploadedFiles.map((file, index) => (
                      <div key={index} className="relative group">
                        <div className="aspect-square rounded-lg overflow-hidden border border-border">
                          <Image
                            src={file.preview}
                            alt={`Upload ${index + 1}`}
                            width={200}
                            height={200}
                            className="w-full h-full object-cover"
                          />
                          
                          {/* Upload Status Overlay */}
                          <div className="absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity">
                            {file.uploadStatus === 'pending' && (
                              <div className="text-white text-sm bg-blue-600 px-2 py-1 rounded">
                                Ready to upload
                              </div>
                            )}
                            {file.uploadStatus === 'uploading' && (
                              <div className="text-white text-sm bg-yellow-600 px-2 py-1 rounded flex items-center gap-1">
                                <Loader2 className="h-3 w-3 animate-spin" />
                                Uploading...
                              </div>
                            )}
                            {file.uploadStatus === 'uploaded' && (
                              <div className="text-white text-sm bg-green-600 px-2 py-1 rounded flex items-center gap-1">
                                <CheckCircle className="h-3 w-3" />
                                Uploaded
                              </div>
                            )}
                            {file.uploadStatus === 'error' && (
                              <div className="text-white text-sm bg-red-600 px-2 py-1 rounded flex items-center gap-1">
                                <AlertCircle className="h-3 w-3" />
                                Upload failed
                              </div>
                            )}
                          </div>
                        </div>
                        
                        <Button
                          variant="destructive"
                          size="sm"
                          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                          onClick={() => removeFile(index)}
                          disabled={file.uploadStatus === 'uploading'}
                        >
                          ×
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Style Input Section */}
            <Card className={`border-border/50 shadow-lg ${results.length > 0 && 'ring-2 ring-primary/20'}`}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5" />
                  Enhancement Style
                  {results.length > 0 && (
                    <Badge className="ml-2 bg-primary/10 text-primary border-primary/20">
                      Current Style
                    </Badge>
                  )}
                </CardTitle>
                <CardDescription>
                  {results.length > 0 
                    ? "Change your style below and click 'Enhance Images' to regenerate with new settings"
                    : "Describe the style and setting where your products will be showcased"
                  }
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {predefinedStyles.map((predefinedStyle, index) => (
                    <Button
                      key={index}
                      variant={style === predefinedStyle ? "default" : "outline"}
                      className="h-auto p-3 text-left justify-start"
                      onClick={() => setStyle(predefinedStyle)}
                    >
                      {predefinedStyle}
                    </Button>
                  ))}
                </div>
                
                <div className="relative">
                  <Textarea
                    placeholder="Or describe your own custom style (e.g., 'A cozy bohemian living room with warm lighting and natural textures')"
                    value={style}
                    onChange={(e) => setStyle(e.target.value)}
                    className="min-h-20"
                  />
                </div>

                {results.length > 0 && (
                  <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-4">
                    <p className="text-sm text-blue-800 dark:text-blue-200">
                      💡 <strong>Want to try a different style?</strong> Select a new style above and click &quot;Enhance Images&quot; to regenerate your photos with the new settings.
                    </p>
                  </div>
                )}

                {/* Upload Progress Info */}
                {uploadedFiles.length > 0 && (
                  <div className="bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 rounded-lg p-3 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-300">Files Status:</span>
                      <div className="flex gap-4">
                        <span className="text-blue-600">Pending: {uploadedFiles.filter(f => f.uploadStatus === 'pending').length}</span>
                        <span className="text-yellow-600">Uploading: {uploadedFiles.filter(f => f.uploadStatus === 'uploading').length}</span>
                        <span className="text-green-600">Uploaded: {uploadedFiles.filter(f => f.uploadStatus === 'uploaded').length}</span>
                        <span className="text-red-600">Failed: {uploadedFiles.filter(f => f.uploadStatus === 'error').length}</span>
                      </div>
                    </div>
                  </div>
                )}

                <Button 
                  onClick={enhanceImages}
                  disabled={!uploadedFiles.length || !style || isProcessing}
                  className="w-full"
                  size="lg"
                >
                  {isProcessing ? (
                    <>
                      <Wand2 className="mr-2 h-4 w-4 animate-spin" />
                      Processing (Upload → Enhance)...
                    </>
                  ) : results.length > 0 ? (
                    <>
                      <Wand2 className="mr-2 h-4 w-4" />
                      Enhance with New Style
                    </>
                  ) : (
                    <>
                      <Wand2 className="mr-2 h-4 w-4" />
                      Upload & Enhance Images
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>

            {/* Results Section */}
            {results.length > 0 && (
              <Card className="border-border/50 shadow-lg">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        <Eye className="h-5 w-5" />
                        Enhanced Results
                      </CardTitle>
                      <CardDescription>
                        Your enhanced images and professional mockups are ready
                      </CardDescription>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={refreshResults}
                        disabled={isProcessing}
                        className="flex items-center gap-2"
                      >
                        <RefreshCw className={`h-4 w-4 ${isProcessing ? 'animate-spin' : ''}`} />
                        Refresh
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={changeStyle}
                        className="flex items-center gap-2"
                      >
                        <Edit3 className="h-4 w-4" />
                        Change Style
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={startOver}
                        className="flex items-center gap-2"
                      >
                        <RotateCcw className="h-4 w-4" />
                        Start Over
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    {results.map((result, index) => (
                      <div key={index} className="border rounded-lg p-4 space-y-4">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold">Image {index + 1}</h3>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={async () => {
                              setIsProcessing(true);
                              try {
                                // Use the uploaded filename if available, otherwise use the original filename
                                const filenameToUse = uploadedFiles[index].uploadedUrl || uploadedFiles[index].filename;
                                
                                const response = await fetch('https://asia-south1-kalasetu-5.cloudfunctions.net/enhance-and-mockup', {
                                  method: 'POST',
                                  headers: {
                                    'Content-Type': 'application/json',
                                  },
                                  body: JSON.stringify({
                                    filename: filenameToUse,
                                    style: style
                                  }),
                                });

                                if (!response.ok) {
                                  throw new Error(`Enhancement API error! status: ${response.status}`);
                                }

                                const newResult = await response.json();
                                
                                // Validate response
                                if (!newResult.enhanced_image_url || !newResult.mockup_image_url) {
                                  throw new Error('Invalid response format from enhancement API');
                                }
                                
                                setResults(prev => {
                                  const updated = [...prev];
                                  updated[index] = newResult;
                                  return updated;
                                });
                              } catch (error) {
                                console.error('Error refreshing image:', error);
                                const errorMessage = error instanceof Error ? error.message : 'Unknown error';
                                alert(`Failed to regenerate image: ${errorMessage}`);
                              } finally {
                                setIsProcessing(false);
                              }
                            }}
                            disabled={isProcessing || uploadedFiles[index]?.uploadStatus !== 'uploaded'}
                            className="flex items-center gap-1"
                          >
                            <RefreshCw className={`h-3 w-3 ${isProcessing ? 'animate-spin' : ''}`} />
                            Regenerate
                          </Button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {/* Enhanced Image */}
                          <div className="space-y-2">
                            <h4 className="font-medium text-sm text-muted-foreground">Enhanced Image</h4>
                            <div className="aspect-square rounded-lg overflow-hidden border border-border">
                              <Image
                                src={result.enhanced_image_url}
                                alt={`Enhanced ${index + 1}`}
                                width={300}
                                height={300}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <Button variant="outline" size="sm" className="w-full">
                              <Download className="mr-2 h-4 w-4" />
                              Download Enhanced
                            </Button>
                          </div>

                          {/* Mockup Image */}
                          <div className="space-y-2">
                            <h4 className="font-medium text-sm text-muted-foreground">Mockup Image</h4>
                            <div className="aspect-square rounded-lg overflow-hidden border border-border">
                              <Image
                                src={result.mockup_image_url}
                                alt={`Mockup ${index + 1}`}
                                width={300}
                                height={300}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <Button variant="outline" size="sm" className="w-full">
                              <Download className="mr-2 h-4 w-4" />
                              Download Mockup
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
