import { Shield, Zap, Cloud, Cpu, Lock, GitBranch } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: <Zap className="w-6 h-6 text-yellow-400" />,
    title: "Instant Deployments",
    description: "Go from commit to production in under 5 minutes with our hyper-optimized build pipelines."
  },
  {
    icon: <Shield className="w-6 h-6 text-blue-400" />,
    title: "Bank-Grade Security",
    description: "Automated vulnerability scanning and role-based access control built into every layer."
  },
  {
    icon: <Cpu className="w-6 h-6 text-purple-400" />,
    title: "AI-Powered Ops",
    description: "Our AI agents monitor your infrastructure 24/7, predicting and preventing downtime."
  },
  {
    icon: <Cloud className="w-6 h-6 text-cyan-400" />,
    title: "Multi-Cloud Native",
    description: "Deploy to AWS, GCP, and Azure simultaneously without changing a single line of config."
  },
  {
    icon: <Lock className="w-6 h-6 text-red-400" />,
    title: "Zero-Trust Architecture",
    description: "Every request is authenticated, authorized, and encrypted. Trust no one, verify everything."
  },
  {
    icon: <GitBranch className="w-6 h-6 text-orange-400" />,
    title: "Automated Workflows",
    description: "Connect GitHub or GitLab and let Salus handle the rest. Branch previews included."
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Built for the future of DevOps</h2>
          <p className="text-xl text-muted-foreground">
            Salus abstracts away the complexity of modern infrastructure so you can focus on building great product.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-8 rounded-2xl bg-card border border-white/5 hover:border-white/10 transition-all hover:bg-card/80 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              <div className="w-12 h-12 rounded-lg bg-background border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
