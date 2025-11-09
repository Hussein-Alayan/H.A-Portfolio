"use client"

import { motion } from "framer-motion"
import { Heart } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ColorReactiveText } from "./color-reactive-components"
import { SectionHeader } from "./section-progress";
import { VisualBreak, ContentBlock } from "./typography-system";

export function VolunteerSection() {
  return (
    <section id="volunteer" className="py-32 px-4 sm:px-6 lg:px-8 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-24"
        >
          <SectionHeader 
            number="06" 
            title={<ColorReactiveText variant="gradient">Volunteer Work</ColorReactiveText>}
            subtitle="Giving back to the community through meaningful volunteer experiences."
          />

          <VisualBreak type="wave" />
          <ContentBlock>
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="transition-all"
            >
              <Card className="border-border bg-card/50 backdrop-blur">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5, type: "spring" }}
                    className="p-3 bg-destructive/10 rounded-lg"
                  >
                    <Heart className="text-destructive" size={24} />
                  </motion.div>
                  <CardTitle className="text-2xl">Lebanese Red Cross</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg font-medium">First Responder</p>
                <p className="text-muted-foreground leading-relaxed">
                  As a volunteer First Responder with the Lebanese Red Cross, I provide emergency medical services to
                  communities across Lebanon. This role has taught me invaluable lessons in crisis management, teamwork
                  under pressure, and the importance of serving others. It's a reminder that technology and code are
                  tools to make a real difference in people's lives.
                </p>
                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    Committed to humanitarian service and emergency response in my community
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          </ContentBlock>
        </motion.div>
      </div>
    </section>
  )
}
