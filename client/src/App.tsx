import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Research from "@/pages/Research";
import Team from "@/pages/Team";
import Publications from "@/pages/Publications";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/research" component={Research} />
        <Route path="/team" component={Team} />
        <Route path="/publications" component={Publications} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <TooltipProvider>
        <Router />
        <Toaster />
      </TooltipProvider>
    </ThemeProvider>
  );
}

export default App;
