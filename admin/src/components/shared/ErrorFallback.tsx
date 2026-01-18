import { useNavigate } from "react-router-dom";
import { AlertCircle, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface ErrorFallbackProps {
  error: any;
  resetErrorBoundary: () => void;
}

const ErrorFallback = ({ error, resetErrorBoundary }: ErrorFallbackProps) => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gray-50/50 p-4 dark:bg-gray-900/50">
      <Card className="w-full max-w-md border-destructive/50 bg-destructive/5 shadow-lg">
        <CardHeader className="flex flex-col items-center space-y-2 pb-2">
          <div className="rounded-full bg-destructive/10 p-3">
            <AlertCircle className="h-10 w-10 text-destructive" aria-hidden="true" />
          </div>
          <CardTitle className="text-xl font-bold tracking-tight text-destructive">
            Something went wrong
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 pt-4 text-center">
          <p className="text-sm text-muted-foreground">
            An unexpected error occurred. Our team has been notified.
          </p>
          <div className="rounded-md bg-white p-4 text-left font-mono text-xs text-red-600 shadow-sm dark:bg-black">
            {error.message}
          </div>
        </CardContent>
        <CardFooter className="flex justify-center gap-4 pb-8">
          <Button
            onClick={() => window.location.reload()}
            variant="outline"
            className="gap-2 text-white"
          >
            <RotateCcw className="h-4 w-4" />
            Reload Page
          </Button>
          <Button
            onClick={() => {
              resetErrorBoundary();
              navigate("/dashboard");
            }}
            variant="default"
            className="gap-2"
          >
            Go to Dashboard
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ErrorFallback;
