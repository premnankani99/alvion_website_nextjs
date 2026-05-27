"use client";
import React from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Day2DatabaseScaling() {
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
              🚀 30 Days of System Design – Day 2: Database Scaling
            </h1>
            <p className="text-gray-500 text-sm mb-8">By Alvion Technologies</p>

            {/* Intro Quote */}
            <div className="border-l-4 border-blue-500 bg-[#f4f7fb] p-6 mb-8 text-gray-700 italic rounded-r-lg text-sm md:text-base">
              As applications scale, databases often become the first point of stress. Understanding how to scale data is a foundational system design skill.
            </div>

            <div className="text-gray-700 text-sm md:text-base space-y-6 leading-relaxed mb-12">
              <p>
                In the early stages of building a product, database performance rarely becomes a concern. A single instance can handle reads, writes, and moderate traffic without noticeable delay.
              </p>
              <p>
                However, as user adoption increases, data volume grows exponentially. Queries become heavier, write operations increase, and latency starts creeping into the system. At this stage, database scaling becomes critical.
              </p>
              <p>
                Scaling a database is not just a performance optimization — it is a structural architectural decision that determines how your system behaves under growth.
              </p>
            </div>

            <hr className="border-gray-100 mb-12" />

            {/* Section 1 */}
            <section className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-blue-600 mb-4 flex items-center">
                <span className="mr-2">⚙️</span> Vertical vs Horizontal Scaling
              </h2>
              <p className="text-gray-700 mb-6 text-sm md:text-base">
                When a database begins experiencing load pressure, there are two primary scaling strategies available.
              </p>
              
              <div className="mb-8">
                <h3 className="font-bold text-gray-900 mb-3 text-lg">Vertical Scaling (Scale Up)</h3>
                <p className="text-gray-700 mb-4 text-sm md:text-base">
                  Vertical scaling involves upgrading a single server by adding more CPU, RAM, or storage capacity. This approach is straightforward and requires minimal architectural changes.
                </p>
                <p className="text-gray-700 mb-4 text-sm md:text-base">
                  It is often the first step startups take because it is fast to implement and operationally simple.
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  {["Simple Implementation", "Minimal Architecture Change", "Hardware Limits", "Single Point of Failure"].map((badge) => (
                    <span key={badge} className="px-4 py-2 rounded-full border border-blue-200 text-blue-700 text-sm font-medium">
                      {badge}
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 text-sm md:text-base">
                  Despite its simplicity, vertical scaling has physical limits. Hardware cannot grow infinitely, and high-performance machines become prohibitively expensive.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 mb-3 text-lg">Horizontal Scaling (Scale Out)</h3>
                <p className="text-gray-700 mb-4 text-sm md:text-base">
                  Horizontal scaling involves adding more servers (nodes) to the database infrastructure, distributing the data and traffic across multiple machines.
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  {["Fault Tolerance", "Load Distribution", "High Availability", "Unlimited Growth"].map((badge) => (
                    <span key={badge} className="px-4 py-2 rounded-full border border-blue-200 text-blue-700 text-sm font-medium">
                      {badge}
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 text-sm md:text-base">
                  Horizontal scaling enables systems to handle massive traffic volumes, but it introduces new complexities in coordination, consistency, and routing.
                </p>
              </div>
            </section>

            <hr className="border-gray-100 mb-12" />

            {/* Section 2 */}
            <section className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-blue-600 mb-4 flex items-center">
                <span className="mr-2">📁</span> Sharding: Scaling Databases Horizontally
              </h2>
              <p className="text-gray-700 mb-4 text-sm md:text-base">
                Sharding is a common horizontal scaling technique where a database is divided into smaller partitions known as shards.
              </p>
              <p className="text-gray-700 mb-4 text-sm md:text-base">
                Each shard contains the same schema but stores a unique subset of the data. Instead of one large database managing all records, multiple smaller databases manage partitions of the dataset.
              </p>
              <p className="text-gray-700 mb-6 text-sm md:text-base">
                The key concept in sharding is the <strong>sharding key</strong>. This key determines how data is distributed across shards.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-6">
                {["Sharding Key", "Hash Routing", "user_id % N", "Even Distribution"].map((badge) => (
                  <span key={badge} className="px-4 py-2 rounded-full border border-blue-200 text-blue-700 text-sm font-medium">
                    {badge}
                  </span>
                ))}
              </div>

              <p className="text-gray-700 mb-4 text-sm md:text-base">
                A common routing method uses a hashing function such as <code>user_id % N</code> to determine which shard stores a particular record. This ensures even distribution and efficient request routing.
              </p>
              <p className="text-gray-700 text-sm md:text-base">
                Well-designed sharding dramatically improves scalability and write throughput.
              </p>
            </section>

            <hr className="border-gray-100 mb-12" />

            {/* Section 3 */}
            <section className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-blue-600 mb-4 flex items-center">
                <span className="mr-2">⚖️</span> Key Design Considerations & Trade-offs
              </h2>
              <p className="text-gray-700 mb-6 text-sm md:text-base">
                While sharding improves scalability, it also introduces architectural trade-offs that must be carefully managed.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-6">
                {["Re-sharding", "Hotspots", "Cross-Shard Joins", "Denormalization"].map((badge) => (
                  <span key={badge} className="px-4 py-2 rounded-full border border-blue-200 text-blue-700 text-sm font-medium">
                    {badge}
                  </span>
                ))}
              </div>

              <p className="text-gray-700 mb-6 text-sm md:text-base leading-relaxed">
                <strong>Re-sharding</strong> becomes necessary when data distribution becomes uneven. <strong>Hotspots</strong> occur when certain keys (e.g., celebrity accounts) generate disproportionate traffic on a single shard. <strong>Cross-shard joins</strong> are expensive and reduce performance. <strong>Denormalization</strong> is often used to maintain query efficiency across shards.
              </p>

              <div className="bg-[#f4f7fb] p-6 rounded-lg border border-gray-100 mb-6">
                <ul className="list-disc pl-5 space-y-3 text-gray-700 text-sm md:text-base">
                  <li>Consistent hashing to reduce re-distribution during scaling</li>
                  <li>Smart sharding key selection to avoid uneven load</li>
                  <li>Selective use of NoSQL databases for high-volume workloads</li>
                  <li>Monitoring and observability to detect shard imbalance</li>
                </ul>
              </div>
              <p className="text-gray-700 text-sm md:text-base">
                Database scaling is a balance between performance, cost, and operational complexity.
              </p>
            </section>

            <hr className="border-gray-100 mb-12" />

            {/* Section 4 */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-blue-600 mb-4 flex items-center">
                <span className="mr-2">🧠</span> Final System Design Insight
              </h2>
              <p className="text-gray-700 mb-4 text-sm md:text-base">
                Scaling databases is not simply about adding more servers. It requires understanding workload patterns, data distribution, consistency requirements, and long-term growth expectations.
              </p>
              <p className="text-gray-700 mb-6 text-sm md:text-base">
                Strong system designers think ahead. They design databases not just for current traffic, but for future scale.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-6">
                {["Scalability", "Performance", "Reliability", "Architecture"].map((badge) => (
                  <span key={badge} className="px-4 py-2 rounded-full border border-blue-200 text-blue-700 text-sm font-medium">
                    {badge}
                  </span>
                ))}
              </div>
              
              <p className="text-gray-700 text-sm md:text-base">
                A well-architected scaling strategy allows applications to grow confidently. A poorly designed one creates bottlenecks that become increasingly difficult to fix over time.
              </p>
            </section>

          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
