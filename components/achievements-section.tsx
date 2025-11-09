"use client";

import { motion } from "framer-motion";
import { Check, Star, Quote } from "lucide-react";
import { ColorReactiveText, ColorReactiveCard } from "./color-reactive-components";

const achievements = [
  {
    title: "SE Factory Graduate",
    description: "Completed intensive 3-month software engineering bootcamp",
    icon: Check,
    color: "text-green-400",
    year: "2025",
  },
  {
    title: "Red Cross First Responder",
    description: "2+ years of emergency medical service volunteer work",
    icon: Star,
    color: "text-red-400",
    year: "2022-2024",
  },
  {
    title: "AI Integration Expert",
    description: "Successfully integrated AI APIs in 5+ production projects",
    icon: Star,
    color: "text-purple-400",
    year: "2024",
  },
];

const testimonials = [
  {
    quote: "Hussein delivered exceptional work on our web application. His attention to detail and technical skills are outstanding.",
    author: "Project Client",
    role: "Tech Startup Founder",
    rating: 5,
  },
  {
    quote: "Professional, reliable, and innovative. Hussein brought our ideas to life with modern web technologies.",
    author: "Development Partner",
    role: "Senior Developer",
    rating: 5,
  },
];

export function AchievementsSection() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          {/* Achievements */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">
              <ColorReactiveText variant="gradient">Key Achievements</ColorReactiveText>
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <ColorReactiveCard className="p-6 h-full">
                    <div className="flex items-start gap-4">
                      <div className="shrink-0">
                        <achievement.icon className={`w-6 h-6 ${achievement.color}`} />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold">
                            <ColorReactiveText variant="solid">
                              {achievement.title}
                            </ColorReactiveText>
                          </h4>
                          <span className="text-xs text-muted-foreground font-medium">
                            {achievement.year}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </ColorReactiveCard>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">
              <ColorReactiveText variant="gradient">Client Feedback</ColorReactiveText>
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <ColorReactiveCard className="p-6 relative">
                    <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
                    <div className="space-y-4">
                      <div className="flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-muted-foreground leading-relaxed italic">
                        "{testimonial.quote}"
                      </p>
                      <div className="border-t pt-4">
                        <p className="font-semibold">
                          <ColorReactiveText variant="solid">
                            {testimonial.author}
                          </ColorReactiveText>
                        </p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </ColorReactiveCard>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}