"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ExternalLink, ChevronDown } from "lucide-react";
import Image from "next/image";
export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<any | null>(null);
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const projects = [
    {
      id: 1,
      title: "YenSaoSaiGon",
      shortDescription:
        "A full-featured e-commerce platform with product management.",
      description:
        "A full-featured e-commerce platform with product management, cart, payment processing, order tracking, and user roles. Includes warehouse & inventory management, multi-branch support, reports & analytics, and shipping integration. ",
      image: "/img/yensaosaigon.jpg?height=400&width=600",
      tags: [
        "C#",
        "ASP.NET",
        "MSSQL",
        "React",
        "TailwindCSS",
        "MUI",
        "Keycloak",
        "NextJS",
      ],
      features: [
        "Product Management",
        "Cart Functionality",
        "Payment Processing",
        "Order Management",
        "User Authentication & Roles",
        "Warehouse & Inventory Management",
        "Branch Management",
        "Reports & Analytics",
        "Shipping & Delivery",
        "Admin Dashboard",
      ],
      demoLink: "https://yensaosaigon.com",
      githubLink: "#",
      fullDescription:
        "A full-featured e-commerce platform with product management, cart, payment processing, order tracking, and user roles. Includes warehouse & inventory management, multi-branch support, reports & analytics, and shipping integration.",
    },
    {
      id: 2,
      title: "Glimmer",
      shortDescription: "A social media app for Australia Government",
      description: "A social media app for Australia Government",
      image: "/img/placeholder.svg?height=400&width=600",
      tags: ["NodeJS", "Express", "MongoDB", "React", "TailwindCSS"],
      features: ["Newfeed", "Groups", "Business Account", "Pages", "Events"],
      demoLink: "#",
      githubLink: "#",
      fullDescription: "A social media app for Australia Government",
    },
    {
      id: 3,
      title: "NinhBinhTourismInfo",
      shortDescription:
        "NinhBinhTourismInfo is a mobile application developed specifically for tourists when experiencing tourism in Ninh Binh.",
      description: "",
      image: "/img/ninhbinh.webp?height=400&width=600",
      tags: ["React Native", "Expo", "TailwindCSS", "TypeScript", ".Net"],
      features: [
        "Tourist Guide",
        "Search & book Restaurant",
        "Search & book hotel",
        "Find shoping, sightseeing, entertainment & travel services",
        "Tourist Event",
        "Tourist Service",
        "Tourist News",
        "Tourist Review",
        "Tourist Feedback",
        "Tourist Support",
      ],
      demoLink:
        "https://play.google.com/store/apps/details?id=com.bkholding.tourism&pcampaignid=web_share",
      githubLink: "#",
      fullDescription:
        "NinhBinhTourismInfo is a mobile app designed specifically for tourists exploring Ninh Binh. It provides essential travel information, booking services, and reviews to enhance the visitor experience.",
    },
    // {
    //   id: 4,
    //   title: "Compiler Design Project",
    //   shortDescription:
    //     "A custom programming language compiler with optimization features.",
    //   description:
    //     "A custom programming language compiler with advanced optimization features.",
    //   image: "/placeholder.svg?height=400&width=600",
    //   tags: ["C", "LLVM", "Assembly", "Python"],
    //   features: [
    //     "Lexical analysis",
    //     "Syntax parsing",
    //     "Code optimization",
    //     "Error handling",
    //     "Assembly generation",
    //   ],
    //   demoLink: "#",
    //   githubLink: "#",
    //   fullDescription:
    //     "This compiler project implements a custom programming language with modern features and optimizations. Built using C and LLVM, it includes comprehensive error handling and code optimization capabilities. The compiler performs lexical analysis, syntax parsing, semantic analysis, and generates optimized assembly code.",
    // },
    {
      id: 5,
      title: "Human Resource Management System",
      shortDescription:
        "A human resource management system with employee management, payroll, and reporting.",
      description:
        "A human resource management system with employee management, payroll, and reporting.",
      image: "/img/hrm.jpg?height=400&width=600",
      tags: [".Net Framework", "MSSQL", "AngularJs", "Bootstrap"],
      features: [
        "Employee management",
        "Payroll",
        "Reporting",
        "User management",
        "Role-based access control",
      ],
      demoLink: "#",
      githubLink: "#",
      fullDescription:
        "This human resource management system provides comprehensive employee management, payroll, and reporting capabilities. Built with .NET Framework and MSSQL for performance, it implements advanced features such as role-based access control and user management. The system includes comprehensive monitoring and management tools.",
    },
    {
      id: 6,
      title: "VangYasuo",
      shortDescription:
        "VangYasuo is a website for buying, selling, and managing game accounts. It supports secure payments, balance top-ups, special promotions, and a Lucky Spin feature for rewards.",
      description: "",
      image: "/img/vangyasuo.jpg?height=400&width=600",
      tags: ["Vue", "TailwindCSS", "Nuxtjs", "NodeJS", "Express", "MongoDB"],
      features: [
        "Game account listing & purchasing",
        "Account management",
        "Deposit & payment processing",
        "Top-up events & promotions",
        "Lucky spin feature",
      ],
      demoLink: "https://vangyasuo.com/",
      githubLink: "#",
      fullDescription:
        "This neural network framework provides high-performance deep learning capabilities. Built primarily in C++ with CUDA acceleration, it offers comprehensive tools for building and training neural networks. Features include automatic differentiation, model optimization, and detailed performance profiling.",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            Portfolio
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variants={fadeIn}
            >
              <Card
                className={`group h-full cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  expandedProject === project.id ? "ring-2 ring-primary" : ""
                }`}
                onClick={() =>
                  setExpandedProject(
                    expandedProject === project.id ? null : project.id
                  )
                }
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <Image
                      src={
                        project.image ||
                        "/img/placeholder.svg?height=400&width=600"
                      }
                      alt={project.title}
                      className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-background/20 p-6 flex flex-col justify-end">
                      <h3 className="text-xl font-bold mb-2">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {project.shortDescription}
                      </p>
                    </div>
                  </div>

                  <AnimatePresence>
                    {expandedProject === project.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="p-6 border-t"
                      >
                        <div className="space-y-4">
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, i) => (
                              <Badge key={i} variant="secondary">
                                {tag}
                              </Badge>
                            ))}
                          </div>

                          <div className="space-y-2">
                            <h4 className="font-semibold">Key Features:</h4>
                            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                              {project.features.map((feature, i) => (
                                <li key={i}>{feature}</li>
                              ))}
                            </ul>
                          </div>

                          <div className="flex gap-4 pt-2">
                            {/* <Button
                              size="sm"
                              variant="outline"
                              onClick={(e) => {
                                e.stopPropagation();
                                window.open(project.githubLink, "_blank");
                              }}
                            >
                              <Github className="h-4 w-4 mr-2" />
                              Code
                            </Button> */}
                            <Button
                              size="sm"
                              onClick={(e) => {
                                e.stopPropagation();
                                window.open(project.demoLink, "_blank");
                              }}
                            >
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Demo
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedProject(project);
                              }}
                            >
                              Learn More
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="p-4 text-center">
                    <ChevronDown
                      className={`w-6 h-6 mx-auto transition-transform duration-300 ${
                        expandedProject === project.id ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <Dialog
          open={!!selectedProject}
          onOpenChange={() => setSelectedProject(null)}
        >
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>{selectedProject.title}</DialogTitle>
              <DialogDescription>
                <span className="flex flex-wrap gap-2 mt-2 mb-4">
                  {selectedProject.tags.map((tag: any, i: any) => (
                    <Badge key={i} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </span>
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <img
                src={
                  selectedProject.image ||
                  "/img/placeholder.svg?height=400&width=600"
                }
                alt={selectedProject.title}
                className="w-full rounded-md object-cover aspect-video"
              />
              <p className="text-muted-foreground">
                {selectedProject.fullDescription}
              </p>
              <div className="space-y-4">
                <h4 className="font-semibold">Key Features:</h4>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  {selectedProject.features.map((feature: any, i: any) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-end gap-4 mt-4">
                {/* <Button variant="outline" asChild>
                  <a
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    View Code
                  </a>
                </Button> */}
                <Button asChild>
                  <a
                    href={selectedProject.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
}
