"use client";
import React from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Day4DatabaseReplication() {
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
              🚀 30 Days of System Design – Day 4: Database Replication
            </h1>
            <p className="text-gray-500 text-sm mb-8">By Alvion Technologies</p>

            {/* Intro Quote */}
            <div className="border-l-4 border-blue-500 bg-[#f4f7fb] p-6 mb-8 text-gray-700 italic rounded-r-lg text-sm md:text-base">
              As read traffic grows, scaling databases isn't just about adding capacity — it's about intelligently separating reads from writes.
            </div>

            <div className="text-gray-700 text-sm md:text-base space-y-6 leading-relaxed mb-12">
              <p>
                In real-world systems, most applications are read heavy. Users browse content, view dashboards, load feeds, and fetch records far more often than they modify data.
              </p>
              <p>
                If every read and write hits a single database instance, performance degrades quickly. CPU spikes. Disk I/O increases. Latency rises. And eventually, the system becomes unstable.
              </p>
              <p>
                This is where <strong>Database Replication</strong> becomes foundational in system design.
              </p>
            </div>

            <hr className="border-gray-100 mb-12" />

            {/* Section 1 */}
            <section className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-blue-600 mb-4 flex items-center">
                <span className="mr-2">🗃️</span> The Core Replication Pattern
              </h2>
              <p className="text-gray-700 mb-6 text-sm md:text-base">
                Replication creates multiple copies of the same database across different servers (nodes). Each node has a defined responsibility.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-6">
                {["Master", "Replica", "Writes", "Reads"].map((badge) => (
                  <span key={badge} className="px-4 py-2 rounded-full border border-blue-200 text-blue-700 text-sm font-medium">
                    {badge}
                  </span>
                ))}
              </div>

              <div className="space-y-4 mb-6">
                <p className="text-gray-700 text-sm md:text-base">
                  <strong>Master Database</strong> handles all write operations — insert, update, delete.
                </p>
                <p className="text-gray-700 text-sm md:text-base">
                  <strong>Replica (Slave) Databases</strong> serve read traffic and continuously receive updates from the master.
                </p>
              </div>

              <div className="bg-[#f4f7fb] p-6 rounded-lg border border-gray-100 mb-6">
                <ul className="list-disc pl-5 space-y-3 text-gray-700 text-sm md:text-base">
                  <li>Application writes → Master</li>
                  <li>Application reads → Replicas</li>
                  <li>Data flows from Master → Replicas continuously</li>
                </ul>
              </div>

              <p className="text-gray-700 text-sm md:text-base">
                This separation dramatically improves scalability for read-heavy systems.
              </p>
            </section>

            <hr className="border-gray-100 mb-12" />

            {/* Section 2 */}
            <section className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-blue-600 mb-4 flex items-center">
                <span className="mr-2">⚡</span> Why Replication Matters
              </h2>
              <p className="text-gray-700 mb-6 text-sm md:text-base">
                Replication is not just a performance trick — it is a reliability strategy.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-6">
                {["Performance", "Availability", "Fault-Tolerance", "Scalability"].map((badge) => (
                  <span key={badge} className="px-4 py-2 rounded-full border border-blue-200 text-blue-700 text-sm font-medium">
                    {badge}
                  </span>
                ))}
              </div>

              <div className="space-y-4 mb-6 text-sm md:text-base text-gray-700">
                <p><strong>Improved Performance</strong> — Read traffic scales horizontally by adding more replicas.</p>
                <p><strong>High Availability</strong> — If one replica fails, traffic shifts to healthy replicas.</p>
                <p><strong>Fault Tolerance</strong> — Multiple copies reduce risk of total data loss.</p>
                <p><strong>Operational Flexibility</strong> — Backups and analytics can run on replicas without impacting production writes.</p>
              </div>

              <p className="text-gray-700 text-sm md:text-base">
                This architecture keeps the system responsive even during heavy load.
              </p>
            </section>

            <hr className="border-gray-100 mb-12" />

            {/* Section 3 */}
            <section className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-blue-600 mb-4 flex items-center">
                <span className="mr-2">🛠️</span> Failure Handling (At a Glance)
              </h2>
              <p className="text-gray-700 mb-6 text-sm md:text-base">
                No distributed system is complete without a failure strategy.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-6">
                {["Failover", "Promotion", "Recovery", "Monitoring"].map((badge) => (
                  <span key={badge} className="px-4 py-2 rounded-full border border-blue-200 text-blue-700 text-sm font-medium">
                    {badge}
                  </span>
                ))}
              </div>

              <div className="space-y-4 text-sm md:text-base text-gray-700">
                <p>
                  If a replica goes down, read traffic automatically shifts to other healthy replicas — or temporarily to the master if needed.
                </p>
                <p>
                  If the master fails, a replica can be promoted to become the new master. However, this requires careful coordination to prevent data inconsistency.
                </p>
                <p>
                  Modern systems use automated orchestration tools to detect failure and trigger controlled failover with minimal downtime.
                </p>
              </div>
            </section>

            <hr className="border-gray-100 mb-12" />

            {/* Section 4 */}
            <section className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-blue-600 mb-4 flex items-center">
                <span className="mr-2">📊</span> Important Architectural Insight
              </h2>
              <p className="text-gray-700 mb-6 text-sm md:text-base">
                Replication improves <strong>read scalability</strong>, not write throughput.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-6">
                {["Read-Scale", "Consistency", "Lag", "Durability"].map((badge) => (
                  <span key={badge} className="px-4 py-2 rounded-full border border-blue-200 text-blue-700 text-sm font-medium">
                    {badge}
                  </span>
                ))}
              </div>
              
              <div className="space-y-4 text-sm md:text-base text-gray-700">
                <p>
                  Because writes still go to a single master node, replication does not solve write bottlenecks. For write scaling, systems combine replication with sharding.
                </p>
                <p>
                  Replication may also introduce replication lag — where replicas are slightly behind the master. System designers must evaluate whether eventual consistency is acceptable.
                </p>
              </div>
            </section>

            <hr className="border-gray-100 mb-12" />

            {/* Section 5 */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-blue-600 mb-4 flex items-center">
                <span className="mr-2">🔗</span> Replication in Modern Architectures
              </h2>
              <p className="text-gray-700 mb-6 text-sm md:text-base">
                Replication rarely works alone. It is typically combined with:
              </p>
              
              <div className="bg-[#f4f7fb] p-6 rounded-lg border border-gray-100 mb-6">
                <ul className="list-disc pl-5 space-y-3 text-gray-700 text-sm md:text-base">
                  <li>Load Balancers (to distribute read traffic)</li>
                  <li>Caching Layers (to reduce database hits)</li>
                  <li>Sharding (to scale write throughput)</li>
                  <li>Monitoring systems (to detect replication lag)</li>
                </ul>
              </div>

              <p className="text-gray-700 mb-6 text-sm md:text-base">
                Modern systems don't rely on a single database node — they distribute responsibility across tiers for resilience and safe growth.
              </p>
              
              <div className="flex flex-wrap gap-3">
                {["Distribution", "Redundancy", "Resilience", "Scale"].map((badge) => (
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
