"use client";

import { createReport } from "@/action";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const reportFormSchema = z.object({
  title: z.string(),
  description: z.string(),
  report_type: z.string(),
  evidence_type: z.string(),
  file_url: z.custom<File>((file) => file instanceof File && file.size > 0, {
    message: "Report file is required.",
  }),
  project_id: z.number(),
});

export type ReportFormSchema = z.infer<typeof reportFormSchema>;

const ReportProject = ({ id }: { id: number }) => {
  const queryClient = useQueryClient();

  const { mutateAsync: reportMutation } = useMutation({
    mutationFn: createReport,
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["reports"],
      });
      toast.success("Success", {
        description: data.message,
        style: {
          backgroundColor: "green",
          color: "white",
        },
      });

      // router.push("/reports");
    },
    onError: (error) => {
      console.log("error", error);

      toast.error("Error", {
        description: error.message,
        style: {
          backgroundColor: "red",
          color: "white",
        },
      });
    },
  });

  const form = useForm<ReportFormSchema>({
    resolver: zodResolver(reportFormSchema),
    defaultValues: {
      title: "",
      description: "",
      report_type: "",
      evidence_type: "",
      file_url: undefined as unknown as File,
      project_id: id,
    },
  });

  async function onSubmit(values: ReportFormSchema) {
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("description", values.description);
    formData.append("report_type", values.report_type);
    formData.append("evidence_type", values.evidence_type);
    formData.append("file_url", values.file_url);
    formData.append("project_id", values.project_id.toString());

    await reportMutation(formData).then(() => form.reset());
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
          Report Project
        </DropdownMenuItem>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Report Project</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid gap-4"
            encType="multipart/form-data"
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Title" {...field} required />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Input placeholder="Description" {...field} required />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="report_type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Report Type</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      value={field.value}
                      defaultValue={field.value}
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select report type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Report Type</SelectLabel>
                          <SelectItem value="bribery">Bribery</SelectItem>
                          <SelectItem value="nepotism">Nepotism</SelectItem>
                          <SelectItem value="theft">Theft</SelectItem>
                          <SelectItem value="quality_violation">
                            Quality Violation
                          </SelectItem>
                          <SelectItem value="delayed">delayed</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="file_url"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Upload Evidence</FormLabel>
                  <FormControl>
                    <Input
                      type="file"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        field.onChange(file);
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="evidence_type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Evidence Type</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      value={field.value}
                      defaultValue={field.value}
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select evidence type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Evidence Type</SelectLabel>
                          <SelectItem value="image">Image</SelectItem>
                          <SelectItem value="video">Video</SelectItem>
                          <SelectItem value="document">Document</SelectItem>
                          <SelectItem value="audio">Audio</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={form.formState.isSubmitting}>
              {form.formState.isSubmitting ? "Saving..." : "Save"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default ReportProject;
