"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { CalendarIcon, Info, MapPin, Upload } from "lucide-react";
import { format } from "date-fns";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { REPORT_CATEGORIES } from "@/lib/data";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  title: z.string().min(5, {
    message: "Title must be at least 5 characters.",
  }).max(100, {
    message: "Title must not exceed 100 characters."
  }),
  description: z.string().min(20, {
    message: "Description must be at least 20 characters.",
  }).max(1000, {
    message: "Description must not exceed 1000 characters."
  }),
  category: z.string({
    required_error: "Please select a category.",
  }),
  location: z.string().min(5, {
    message: "Location must be at least 5 characters.",
  }).max(200, {
    message: "Location must not exceed 200 characters."
  }),
  date: z.date({
    required_error: "Please select a date.",
  }),
  evidence: z.array(z.string()).optional(),
});

export function ReportForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      location: "",
      date: new Date(),
      evidence: [],
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    console.log(values);
    setIsSubmitting(false);
    setIsSuccess(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      form.reset();
      setIsSuccess(false);
    }, 3000);
  }

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="rounded-full bg-green-100 p-3 text-green-600 mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-lg font-medium">Report Submitted Successfully</h3>
        <p className="mt-2 text-muted-foreground">
          Your report has been submitted anonymously. You can track its status using the reference number.
        </p>
        <p className="mt-4 font-medium">
          Reference #: {Math.random().toString(36).substring(2, 10).toUpperCase()}
        </p>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-medium">Report Details</h2>
            <p className="text-sm text-muted-foreground">
              Provide detailed information about the issue you are reporting.
            </p>
          </div>
          <Separator />
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Report Title</FormLabel>
                <FormControl>
                  <Input placeholder="Brief description of the issue" {...field} />
                </FormControl>
                <FormDescription>
                  Provide a clear, concise title for your report.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {REPORT_CATEGORIES.map((category) => (
                      <SelectItem key={category.value} value={category.value}>
                        <div className="flex flex-col">
                          <span>{category.label}</span>
                          <span className="text-xs text-muted-foreground">
                            {category.description}
                          </span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormDescription>
                  Select the category that best describes your report.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Detailed Description</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Provide a detailed description of the issue including what happened, who was involved, and any other relevant details."
                    className="min-h-[120px]"
                    {...field}
                  />
                </FormControl>
                <div className="flex items-center justify-between">
                  <FormDescription>
                    Be specific and include all relevant details.
                  </FormDescription>
                  <p className="text-xs text-muted-foreground">
                    {field.value.length}/1000 characters
                  </p>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-medium">Location & Date</h2>
            <p className="text-sm text-muted-foreground">
              Provide information about where and when the incident occurred.
            </p>
          </div>
          <Separator />

          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2">
                  Location
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Info className="h-4 w-4 text-muted-foreground" />
                      </TooltipTrigger>
                      <TooltipContent className="max-w-xs">
                        <p>
                          Provide as much detail as possible about the location. Include barangay name, street, landmarks, etc.
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <MapPin className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input className="pl-8" placeholder="Barangay, Street, Building, etc." {...field} />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Date of Incident</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Select date</span>
                        )}
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date > new Date() || date < new Date("1900-01-01")
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormDescription>
                  Select the date when the incident occurred.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-medium">Evidence (Optional)</h2>
            <p className="text-sm text-muted-foreground">
              You can upload photos or documents as evidence.
            </p>
          </div>
          <Separator />

          <div className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center text-center">
            <Upload className="h-8 w-8 text-muted-foreground mb-2" />
            <p className="text-sm font-medium">Drag and drop files here</p>
            <p className="text-xs text-muted-foreground mt-1 mb-4">
              or click to browse files (max 5MB per file)
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <Button type="button" variant="outline" size="sm">
                <Upload className="h-4 w-4 mr-2" />
                Upload Photo
              </Button>
              <Button type="button" variant="outline" size="sm">
                <Upload className="h-4 w-4 mr-2" />
                Upload Document
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-4 max-w-md">
              Note: All uploaded files are automatically stripped of metadata to protect your identity.
            </p>
          </div>
        </div>

        <div className="rounded-lg border p-4 bg-muted/20">
          <div className="flex items-start gap-4">
            <div className="bg-yellow-100 rounded-full p-2 text-yellow-600">
              <Info className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-medium">Privacy Notice</h3>
              <p className="text-sm text-muted-foreground mt-1">
                All reports are anonymous. We do not collect IP addresses, device information, or any personally identifiable information. 
                Any metadata from uploaded files is automatically removed.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <Button type="submit" size="lg" disabled={isSubmitting} className="bg-red-600 hover:bg-red-700">
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Submitting Report...
              </>
            ) : (
              "Submit Anonymous Report"
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
}