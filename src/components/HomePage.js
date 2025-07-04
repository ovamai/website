import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Play,
  Shield,
  Lock,
  Database,
  Star,
  CheckCircle,
  GitBranch,
  Code,
  Zap,
  Users,
  Globe,
} from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-purple-50">
      {/* Header */}
      <header className="flex items-center justify-between p-6 max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">O</span>
          </div>
          <span className="text-xl font-bold text-gray-900">Ovam.ai</span>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#features"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Features
          </a>
          <Link
            to="/pricing"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Pricing
          </Link>
          <a
            href="#docs"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Docs
          </a>
          <Link to="/login">
            <Button variant="outline" className="mr-2">
              Sign In
            </Button>
          </Link>
          <Button className="bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700">
            Get Started
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <Badge
          variant="secondary"
          className="mb-6 bg-orange-100 text-orange-700 border-orange-200"
        >
          AI-Powered Development
        </Badge>

        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          AI-Powered Code
          <br />
          Reviews and QA —{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-600">
            save
            <br />
            time and cost by 70%
          </span>
        </h1>

        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Advanced AI code reviews, instant deployments, and automated QA
          testing that helps your team ship better code faster.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button
            size="lg"
            className="bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-lg px-8 py-3"
          >
            Get Started <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-3">
            <Play className="mr-2 h-5 w-5" /> Watch Demo
          </Button>
        </div>

        {/* Code Preview Card */}
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-purple-600/20 blur-3xl transform scale-105"></div>
          <Card className="relative bg-white/80 backdrop-blur-sm border-2 border-orange-200/50 shadow-2xl">
            <CardContent className="p-8">
              <div className="bg-gray-900 rounded-lg overflow-hidden">
                <div className="flex items-center justify-between bg-gray-800 px-4 py-2 border-b border-gray-700">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-gray-400 text-sm">main.py</span>
                </div>
                <div className="p-4 text-left font-mono text-sm">
                  <div className="text-gray-400 mb-2">
                    # AI Code Review Suggestions
                  </div>
                  <div className="text-green-400 mb-1">
                    + def optimize_query(self, query):
                  </div>
                  <div className="text-green-400 mb-1">
                    + """Optimize database query performance"""
                  </div>
                  <div className="text-red-400 mb-1">
                    - def slow_query(self, query):
                  </div>
                  <div className="text-white mb-2">
                    {" "}
                    return self.execute(query)
                  </div>
                  <div className="text-blue-400 mb-2">
                    # Performance: 45% improvement detected
                  </div>
                  <div className="text-purple-400">
                    # Security: No vulnerabilities found ✓
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why companies choose section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why companies around the world prefer
            <br />
            Ovam for expanding their team globally.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <Card className="bg-gradient-to-br from-yellow-100 to-orange-100 border-yellow-200">
            <CardContent className="p-6">
              <Zap className="h-8 w-8 text-orange-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">
                70% Faster Reviews
              </h3>
              <p className="text-gray-700 text-sm">
                AI-powered code analysis provides instant feedback and
                suggestions, dramatically reducing review time.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-100 to-cyan-100 border-blue-200">
            <CardContent className="p-6">
              <Users className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">
                Team Collaboration
              </h3>
              <p className="text-gray-700 text-sm">
                Seamless integration with your existing workflow and team
                collaboration tools.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-100 to-pink-100 border-purple-200">
            <CardContent className="p-6">
              <Globe className="h-8 w-8 text-purple-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Global Scale</h3>
              <p className="text-gray-700 text-sm">
                Deploy and scale your applications globally with confidence and
                automated testing.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Feature Timeline */}
        <div className="space-y-12">
          {/* Code Reviews */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                  <Code className="h-4 w-4 text-white" />
                </div>
                <Badge
                  variant="secondary"
                  className="bg-orange-100 text-orange-700"
                >
                  Review code
                </Badge>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                <span className="text-orange-500">Ovam reviews</span>
              </h3>
              <p className="text-gray-600 mb-6">
                Get instant AI-powered code reviews with security analysis,
                performance optimizations, and best practice suggestions.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Real-time security scanning
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Performance optimization hints
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Code quality improvements
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <Card className="bg-gray-900 text-white">
                <CardContent className="p-6">
                  <div className="text-orange-400 mb-2">
                    → AI Review Complete
                  </div>
                  <div className="text-sm text-gray-300 mb-4">
                    Found 3 improvements and 0 security issues
                  </div>
                  <div className="bg-gray-800 rounded p-3 text-xs font-mono">
                    <span className="text-green-400">✓ Performance: </span>
                    <span className="text-gray-300">
                      Database query optimized
                    </span>
                    <br />
                    <span className="text-green-400">✓ Security: </span>
                    <span className="text-gray-300">
                      No vulnerabilities found
                    </span>
                    <br />
                    <span className="text-blue-400">ℹ Style: </span>
                    <span className="text-gray-300">
                      Consider using async/await
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Self Deploy */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="lg:w-1/2">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                  <GitBranch className="h-4 w-4 text-white" />
                </div>
                <Badge
                  variant="secondary"
                  className="bg-purple-100 text-purple-700"
                >
                  Deploy for testing
                </Badge>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                <span className="text-purple-500">Ovam self deploys</span>
              </h3>
              <p className="text-gray-600 mb-6">
                Automatic deployment pipelines that create staging environments
                for every pull request, enabling thorough testing before
                production.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Automatic staging environments
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Zero-downtime deployments
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Rollback capabilities
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <Card className="bg-gray-900">
                <CardContent className="p-6">
                  <div className="text-purple-400 mb-4">
                    → Deployment Pipeline
                  </div>
                  <div className="space-y-3 text-sm font-mono">
                    <div className="flex items-center text-green-400">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                      Build completed ✓
                    </div>
                    <div className="flex items-center text-green-400">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                      Tests passed ✓
                    </div>
                    <div className="flex items-center text-yellow-400">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 animate-pulse"></div>
                      Deploying to staging...
                    </div>
                    <div className="text-gray-400 ml-5">
                      staging-pr-123.ovam.dev
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* QA Testing */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                  <Star className="h-4 w-4 text-white" />
                </div>
                <Badge
                  variant="secondary"
                  className="bg-blue-100 text-blue-700"
                >
                  QA testing
                </Badge>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                <span className="text-blue-500">Ovam self Tests</span>
              </h3>
              <p className="text-gray-600 mb-6">
                Comprehensive automated testing suite that runs integration
                tests, performance benchmarks, and user experience validation.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Automated UI testing
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Performance monitoring
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Cross-browser compatibility
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <Card className="bg-white border-blue-200">
                <CardContent className="p-6">
                  <div className="text-blue-600 font-semibold mb-4">
                    QA Test Suite
                  </div>
                  <div className="space-y-3">
                    <div className="bg-blue-50 rounded-lg p-3">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">UI Tests</span>
                        <span className="text-green-600 text-sm">✓ 24/24</span>
                      </div>
                      <div className="w-full bg-green-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full w-full"></div>
                      </div>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-3">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">Performance</span>
                        <span className="text-green-600 text-sm">✓ 98/100</span>
                      </div>
                      <div className="w-full bg-green-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full w-[98%]"></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Data Security Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Your data stays <span className="text-cyan-500">confidential.</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We prioritize security and privacy with enterprise-grade protection
            for your code and data.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-gradient-to-br from-yellow-100 to-orange-100 border-yellow-200">
            <CardContent className="p-6 text-center">
              <Shield className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Secure reviews</h3>
              <p className="text-gray-700 text-sm">
                Military-grade encryption for all code reviews and analysis
                processes.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-cyan-100 to-blue-100 border-cyan-200">
            <CardContent className="p-6 text-center">
              <Lock className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Encrypted data</h3>
              <p className="text-gray-700 text-sm">
                End-to-end encryption ensures your code never leaves your
                environment unprotected.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-100 to-pink-100 border-purple-200">
            <CardContent className="p-6 text-center">
              <Database className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">No code storage</h3>
              <p className="text-gray-700 text-sm">
                We analyze your code without storing it permanently on our
                servers.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <Card className="bg-gradient-to-r from-orange-500 to-purple-600 text-white overflow-hidden relative">
          <CardContent className="p-12 text-center relative z-10">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-4">
                Get started and ship
                <br />
                better and faster
              </h2>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Join thousands of developers who trust Ovam AI to accelerate
                their development workflow.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-gray-900 hover:bg-gray-100 text-lg px-8 py-3"
                >
                  Start Free Trial
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 text-lg px-8 py-3"
                >
                  Contact Sales
                </Button>
              </div>
            </div>
            {/* Decorative sailboat illustration placeholder */}
            <div className="absolute right-8 bottom-8 opacity-20">
              <div className="w-24 h-24 border-2 border-white rounded-full flex items-center justify-center">
                <div className="w-12 h-12 border-l-2 border-b-2 border-white transform rotate-45"></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">O</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Ovam.ai</span>
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <a href="#" className="hover:text-gray-900 transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-gray-900 transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-gray-900 transition-colors">
                Support
              </a>
              <a href="#" className="hover:text-gray-900 transition-colors">
                Documentation
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
