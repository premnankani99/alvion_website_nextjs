"use client";
import React from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const daysData = [
  { day: 1, title: "Databases", link: "/day-1-databases" },
  { day: 2, title: "Database Scaling", link: "/day-2-database-scaling" },
  { day: 3, title: "Load Balancing", link: "/day-3-load-balancers" },
  { day: 4, title: "Horizontal vs Vertical Scaling", link: "/day-4-database-replication" },
  { day: 5, title: "CDN & Content Delivery" },
  { day: 6, title: "API Gateway" },
  { day: 7, title: "Microservices Architecture" },
  { day: 8, title: "Monolith vs Microservices" },
  { day: 9, title: "Message Queues" },
  { day: 10, title: "Event-Driven Architecture" },
  { day: 11, title: "Sharding" },
  { day: 12, title: "Replication" },
  { day: 13, title: "CAP Theorem" },
  { day: 14, title: "Distributed Systems Basics" },
  { day: 15, title: "Rate Limiting" },
  { day: 16, title: "Authentication & Authorization" },
  { day: 17, title: "OAuth & JWT" },
  { day: 18, title: "Monitoring & Logging" },
  { day: 19, title: "CI/CD Pipelines" },
  { day: 20, title: "Fault Tolerance" },
  { day: 21, title: "Circuit Breaker Pattern" },
  { day: 22, title: "Data Consistency Models" },
  { day: 23, title: "Search Systems" },
  { day: 24, title: "Real-Time Systems" },
  { day: 25, title: "Designing Chat Systems" },
  { day: 26, title: "Designing Payment Systems" },
  { day: 27, title: "Designing Social Media Feeds" },
  { day: 28, title: "High Availability Systems" },
  { day: 29, title: "Scalable File Storage" },
  { day: 30, title: "End-to-End System Design" },
];

export default function ListOfDaysPage() {
  return (
    <>
      <Navbar />
      <div className="bg-[#f0f4f8] min-h-screen flex flex-col pt-24">
        
        {/* HERO SECTION */}
        <section className="w-full py-8 flex flex-col items-center justify-center text-center px-4 relative">
          <Link 
            href="/blogs" 
            className="absolute left-4 md:left-12 top-0 flex items-center text-gray-500 hover:text-blue-600 transition-colors duration-300"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span className="font-medium text-sm">Back to Blogs</span>
          </Link>

          <h1 className="text-3xl md:text-4xl font-bold text-black mb-4 mt-8 md:mt-0">
            30 Days of System Design
          </h1>
          <p className="text-gray-500 text-sm md:text-base font-medium">
            Master real-world system architecture concepts — one day at a time.
          </p>
        </section>

        {/* DAYS GRID */}
        <main className="flex-grow container mx-auto px-4 md:px-8 pb-20 max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {daysData.map((item) => {
              const cardContent = (
                <div
                  key={item.day}
                  className="bg-white rounded-xl py-8 px-4 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer h-full"
                >
                  <h2 className="text-2xl font-bold text-[#2563eb] mb-2">
                    Day {item.day}
                  </h2>
                  <p className="text-gray-800 text-sm font-medium">
                    {item.title}
                  </p>
                </div>
              );

              return item.link ? (
                <Link href={item.link} key={item.day} className="block h-full">
                  {cardContent}
                </Link>
              ) : (
                <div key={item.day} className="block h-full">
                  {cardContent}
                </div>
              );
            })}
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
