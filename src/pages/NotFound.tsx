import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <div className="text-center p-8">
        <h1 className="text-9xl font-bold text-primary animate-pulse">404</h1>
        <p className="text-2xl font-semibold mt-4 mb-2">Página não encontrada</p>
        <p className="text-muted-foreground mb-8">
          A rota <code className="bg-muted px-2 py-1 rounded-md">{location.pathname}</code> não foi encontrada.
        </p>
        <Button asChild>
          <Link to="/">
            <Home className="mr-2 h-4 w-4" />
            Voltar para a Página Inicial
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;