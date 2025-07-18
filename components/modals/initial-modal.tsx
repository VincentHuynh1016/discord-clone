"use client";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

import{
  Form, 
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {useState, useEffect} from "react";

const formSchema = z.object({
  name: z.string().min(1, {message: "Server name is required"}),
  imageUrl : z.string().min(1, {message: "Server image is required"}),
});

export const IntitialModal = () => {
  const [isMoutned , setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  const form = useForm({
      resolver: zodResolver(formSchema),
      defaultValues: {
          name: "",
          imageUrl: "",
      }
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
      console.log(values);
  };

  if (!isMoutned) {
    return null;
  }
  
  return (
    <Dialog open>
      <DialogContent className="bg-white text-black p-0 overflow-hidden">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className = "text-2xl font-bold text-center">
              Customize your server
          </DialogTitle>
          <DialogDescription className = "text-center text-zinc-500">
              Give your server a personality with a name and an 
              image. You can always change it later.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} 
          className="space-y-8">
            <div className="space-y-8 px-6">
              <div className="flex items-center justify-center text-center">
                TODO: Imgae Upload
              </div>
              <FormField 
              control = {form.control}
              name = "name"
              render={({field}) => (
                <FormItem>
                <FormLabel className="uppercase text-xs font-bold text-zinc-500
                dark:text-secondary/70">
                  Server Name
                </FormLabel>
                <FormControl>
                  <Input disabled={isLoading} className="bg-zinc-300/50 boarder-0
                    focus-visible:ring-0 text-black focus-visble:ring-offset=0" 
                    placeholder="Enter server name" {...field}/>
                </FormControl>
                <FormMessage />
                </FormItem>
              )}
              />
            </div>
            <DialogFooter className="bg-gray-100 px-6 py-4">
              <Button variant= "primary" disabled={isLoading}>
                Create
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}