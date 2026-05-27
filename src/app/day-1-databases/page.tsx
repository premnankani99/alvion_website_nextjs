"use client";
import React from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Day1Databases() {
  return (
    <>
      <Navbar />
      <div className="bg-[#f4f7fb] min-h-screen flex flex-col pt-24">
        <main className="flex-grow container mx-auto px-4 md:px-8 py-8 max-w-4xl">
          <div className="bg-white rounded-xl p-8 md:p-12 shadow-sm">
            {/* Back Button */}
            <div className="mb-6">
              <Link href="/list-of-days" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Days
              </Link>
            </div>
            
            {/* Header */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              🚀 30 Days of System Design – Day 1: Databases
            </h1>
            <p className="text-gray-500 text-sm mb-8">By Alvion Technologies</p>

            {/* Intro Quote */}
            <div className="border-l-4 border-blue-500 bg-[#f4f7fb] p-6 mb-8 text-gray-700 italic rounded-r-lg text-sm md:text-base">
              Every scalable system begins with one critical question: Where does the data live—and how will it scale when thousands or millions of users arrive?
            </div>

            <div className="text-gray-700 text-sm md:text-base space-y-6 leading-relaxed mb-12">
              <p>
                In the early days of building an application, architecture feels simple. One server handles everything — frontend, backend logic, and database. For small traffic, this works perfectly.
              </p>
              <p>
                But as user growth accelerates, that single setup becomes a bottleneck. Queries slow down. Response time increases. Failures impact the entire system.
              </p>
              <p>
                This is why <strong>database architecture is one of the most important decisions in system design.</strong>
              </p>
            </div>

            {/* Section 1 */}
            <section className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-blue-600 mb-4 flex items-center">
                <span className="mr-2">🏢</span> Layered Architecture in Modern Systems
              </h2>
              <p className="text-gray-700 mb-6 text-sm md:text-base">
                To handle scale effectively, systems are divided into logical layers:
              </p>
              
              <div className="flex flex-wrap gap-3 mb-6">
                {["Web / Mobile Layer", "API Layer", "Business Logic", "Data Layer"].map((badge) => (
                  <span key={badge} className="px-4 py-2 rounded-full border border-blue-200 text-blue-700 text-sm font-medium">
                    {badge}
                  </span>
                ))}
              </div>

              <p className="text-gray-700 mb-6 text-sm md:text-base">
                Separating these layers improves flexibility and allows each component to scale independently.
              </p>

              <div className="bg-[#f4f7fb] p-6 rounded-lg border border-gray-100">
                <ul className="list-disc pl-5 space-y-3 text-gray-700 text-sm md:text-base">
                  <li>Scale application servers without touching the database</li>
                  <li>Introduce caching layers like Redis</li>
                  <li>Implement replication for high availability</li>
                  <li>Improve fault isolation</li>
                </ul>
              </div>
            </section>

            <hr className="border-gray-100 mb-12" />

            {/* Section 2 */}
            <section className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-blue-600 mb-6 flex items-center">
                <span className="mr-2">📊</span> Choosing the Right Database
              </h2>
              
              <div className="mb-8">
                <h3 className="font-bold text-gray-900 mb-3 text-lg">Relational Databases (SQL)</h3>
                <p className="text-gray-700 mb-4 text-sm md:text-base">
                  Best for structured data, transactions, and strong consistency. Ideal for financial systems, ERP platforms, and enterprise apps.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["ACID Compliance", "Structured Schema", "Joins & Transactions"].map((badge) => (
                    <span key={badge} className="px-4 py-2 rounded-full border border-blue-200 text-blue-700 text-sm font-medium">
                      {badge}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 mb-3 text-lg">NoSQL Databases</h3>
                <p className="text-gray-700 mb-4 text-sm md:text-base">
                  Designed for horizontal scaling, flexible schemas, and handling massive volumes of data.
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  {["Key-Value Stores", "Document DB", "Column-Based", "Graph DB"].map((badge) => (
                    <span key={badge} className="px-4 py-2 rounded-full border border-blue-200 text-blue-700 text-sm font-medium">
                      {badge}
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 text-sm md:text-base">
                  Large-scale platforms often rely on NoSQL for real-time analytics and high-throughput systems.
                </p>
              </div>
            </section>

            <hr className="border-gray-100 mb-12" />

            {/* Section 3 */}
            <section className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-blue-600 mb-4 flex items-center">
                <span className="mr-2">⚡</span> Polyglot Persistence
              </h2>
              <p className="text-gray-700 mb-6 text-sm md:text-base">
                Modern systems rarely depend on a single database technology. Instead, they combine multiple databases optimized for specific workloads.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-6">
                {["Scalability", "Flexibility", "Efficiency", "Performance"].map((badge) => (
                  <span key={badge} className="px-4 py-2 rounded-full border border-blue-200 text-blue-700 text-sm font-medium">
                    {badge}
                  </span>
                ))}
              </div>

              <p className="text-gray-700 mb-4 text-sm md:text-base">For example:</p>
              <div className="bg-[#f4f7fb] p-6 rounded-lg border border-gray-100">
                <ul className="list-disc pl-5 space-y-3 text-gray-700 text-sm md:text-base">
                  <li>SQL for transactional data</li>
                  <li>NoSQL for user activity logs</li>
                  <li>Cache layer for fast reads</li>
                </ul>
              </div>
            </section>

            <hr className="border-gray-100 mb-12" />

            {/* Section 4 */}
            <section className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-blue-600 mb-4 flex items-center">
                <span className="mr-2">🎯</span> Design for Access Patterns
              </h2>
              <p className="text-gray-700 mb-6 text-sm md:text-base">
                System design is not just about storing data — it's about how data is accessed.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-6">
                {["Read-Heavy?", "Write-Heavy?", "Low Latency?", "Frequent Schema Changes?"].map((badge) => (
                  <span key={badge} className="px-4 py-2 rounded-full border border-blue-200 text-blue-700 text-sm font-medium">
                    {badge}
                  </span>
                ))}
              </div>
              <p className="text-gray-700 text-sm md:text-base">
                Understanding these patterns determines indexing strategy, partitioning model, and database selection.
              </p>
            </section>

            <hr className="border-gray-100 mb-12" />

            {/* Section 5 */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-blue-600 mb-4 flex items-center">
                <span className="mr-2">🧠</span> Final System Design Insight
              </h2>
              <p className="text-gray-700 mb-6 text-sm md:text-base">
                Databases influence system scalability, performance, reliability, and architecture. A well-designed data layer allows smooth growth. A poorly designed one creates long-term bottlenecks.
              </p>
              
              <div className="flex flex-wrap gap-3">
                {["Scalability", "Performance", "Reliability", "Architecture"].map((badge) => (
                  <span key={badge} className="px-4 py-2 rounded-full border border-blue-200 text-blue-700 text-sm font-medium">
                    {badge}
                  </span>
                ))}
              </div>
            </section>

          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
