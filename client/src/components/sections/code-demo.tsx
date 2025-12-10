import { Terminal, Check, Copy } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const codeSnippet = `
# salus.yaml
version: 2.1

pipeline:
  build:
    image: node:20-alpine
    commands:
      - npm ci
      - npm run build
    
  security:
    scanner: salus-guard
    level: strict
    
  deploy:
    target: aws-eks
    strategy: canary
    traffic:
      initial: 10%
      step: 10%
      interval: 5m
`;

export default function CodeDemo() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative rounded-xl overflow-hidden bg-[#1e1e1e] border border-white/10 shadow-2xl font-mono text-sm"
            >
              {/* Window Controls */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#252526] border-b border-white/5">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="text-muted-foreground text-xs">salus.yaml</div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6 text-muted-foreground hover:text-white"
                  onClick={copyToClipboard}
                >
                  {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                </Button>
              </div>

              {/* Code Content */}
              <div className="p-6 overflow-x-auto">
                <pre className="text-gray-300">
                  <code>
                    <span className="text-gray-500"># salus.yaml</span>
                    {"\n"}
                    <span className="text-purple-400">version</span>: <span className="text-yellow-200">2.1</span>
                    {"\n\n"}
                    <span className="text-purple-400">pipeline</span>:
                    {"\n"}
                    <span className="text-yellow-400">  build</span>:
                    {"\n"}
                    <span className="text-purple-400">    image</span>: <span className="text-green-300">node:20-alpine</span>
                    {"\n"}
                    <span className="text-purple-400">    commands</span>:
                    {"\n"}
                    <span className="text-gray-400">      - npm ci</span>
                    {"\n"}
                    <span className="text-gray-400">      - npm run build</span>
                    {"\n\n"}
                    <span className="text-yellow-400">  security</span>:
                    {"\n"}
                    <span className="text-purple-400">    scanner</span>: <span className="text-green-300">salus-guard</span>
                    {"\n"}
                    <span className="text-purple-400">    level</span>: <span className="text-yellow-200">strict</span>
                    {"\n\n"}
                    <span className="text-yellow-400">  deploy</span>:
                    {"\n"}
                    <span className="text-purple-400">    target</span>: <span className="text-green-300">aws-eks</span>
                    {"\n"}
                    <span className="text-purple-400">    strategy</span>: <span className="text-yellow-200">canary</span>
                    {"\n"}
                    <span className="text-purple-400">    traffic</span>:
                    {"\n"}
                    <span className="text-purple-400">      initial</span>: <span className="text-yellow-200">10%</span>
                    {"\n"}
                    <span className="text-purple-400">      step</span>: <span className="text-yellow-200">10%</span>
                    {"\n"}
                    <span className="text-purple-400">      interval</span>: <span className="text-yellow-200">5m</span>
                  </code>
                </pre>
              </div>
            </motion.div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Configuration as Code. <br /><span className="text-gradient">Simplified.</span></h2>
            <p className="text-xl text-muted-foreground mb-8">
              Define your entire infrastructure in a single YAML file. Salus interprets your intent and handles the underlying complexity of Kubernetes, IAM roles, and networking.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="mt-1 w-6 h-6 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold">Type-safe Configuration</h4>
                  <p className="text-muted-foreground">IDE support with auto-completion and validation.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 w-6 h-6 rounded-full bg-yellow-500/20 text-yellow-400 flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold">Drift Detection</h4>
                  <p className="text-muted-foreground">Automatically correct infrastructure that strays from config.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
