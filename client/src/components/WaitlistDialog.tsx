import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { insertWaitlistSchema, type InsertWaitlist } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle2 } from "lucide-react";

interface WaitlistDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function WaitlistDialog({ open, onOpenChange }: WaitlistDialogProps) {
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<InsertWaitlist>({
    resolver: zodResolver(insertWaitlistSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertWaitlist) => {
      const res = await apiRequest("POST", "/api/waitlist", data);
      return res.json();
    },
    onSuccess: () => {
      setIsSuccess(true);
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/waitlist"] });
      
      setTimeout(() => {
        setIsSuccess(false);
        onOpenChange(false);
      }, 3000);
    },
    onError: (error: any) => {
      let errorMessage = "Failed to join waitlist. Please try again.";
      let errorTitle = "Error";
      let isDuplicate = false;
      
      // Parse error message from API response
      if (error.message) {
        try {
          // Check if it's a 409 (duplicate) error
          isDuplicate = error.message.startsWith("409:");
          
          // Extract JSON from error message (format: "409: {error: ...}")
          const colonIndex = error.message.indexOf(':');
          if (colonIndex !== -1) {
            const jsonPart = error.message.substring(colonIndex + 1).trim();
            const errorData = JSON.parse(jsonPart);
            errorMessage = errorData.error || errorMessage;
          }
        } catch (e) {
          // If parsing fails, use a generic message
          errorMessage = "Failed to join waitlist. Please try again.";
        }
      }
      
      // Set appropriate title based on error type
      if (isDuplicate) {
        errorTitle = "Already on the list?";
      }
      
      toast({
        title: errorTitle,
        description: errorMessage,
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertWaitlist) => {
    mutation.mutate(data);
  };

  const handleOpenChange = (newOpen: boolean) => {
    if (!newOpen && !mutation.isPending) {
      setIsSuccess(false);
      form.reset();
    }
    onOpenChange(newOpen);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-md">
        {isSuccess ? (
          <div className="flex flex-col items-center justify-center py-8 space-y-4">
            <CheckCircle2 className="h-16 w-16 text-primary" />
            <DialogHeader className="text-center space-y-2">
              <DialogTitle className="text-2xl">You're on the list!</DialogTitle>
              <DialogDescription className="text-base">
                Thank you for joining the AiriGo waitlist. We'll notify you as soon as we launch.
              </DialogDescription>
            </DialogHeader>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>Join the Waitlist</DialogTitle>
              <DialogDescription>
                Be the first to know when AiriGo launches. Sign up for exclusive updates and early access.
              </DialogDescription>
            </DialogHeader>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Your name" 
                          {...field} 
                          data-testid="input-name"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input 
                          type="email" 
                          placeholder="your@email.com" 
                          {...field}
                          data-testid="input-email"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={mutation.isPending}
                  data-testid="button-submit-waitlist"
                >
                  {mutation.isPending ? "Joining..." : "Join Waitlist"}
                </Button>
              </form>
            </Form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
