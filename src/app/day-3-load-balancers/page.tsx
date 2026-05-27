"use client";
import React from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Day3LoadBalancers() {
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
              🚀 30 Days of System Design – Day 3: Load Balancers
            </h1>
            <p className="text-gray-500 text-sm mb-8">By Alvion Technologies</p>

            {/* Intro Quote */}
            <div className="border-l-4 border-blue-500 bg-[#f4f7fb] p-6 mb-8 text-gray-700 italic rounded-r-lg text-sm md:text-base">
              As traffic grows, a single server becomes a risk — not just a bottleneck, but a single point of failure. Load balancers transform scaling from a risk into a strategy.
            </div>

            <div className="text-gray-700 text-sm md:text-base space-y-6 leading-relaxed mb-12">
              <p>
                In early-stage systems, a single server may handle all traffic efficiently. But as users increase, the same architecture becomes fragile. A sudden spike can overwhelm the server, causing downtime and lost user trust.
              </p>
              <p>
                This is why load balancers are foundational in modern distributed systems. They distribute traffic intelligently, improve availability, and enable safe horizontal scaling.
              </p>
              <p>
                <strong>Without load balancing, scaling is risky. With it, scaling becomes predictable.</strong>
              </p>
            </div>

            <hr className="border-gray-100 mb-12" />

            {/* Section 1 */}
            <section className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-blue-600 mb-4 flex items-center">
                <span className="mr-2">🔹</span> What is a Load Balancer?
              </h2>
              <p className="text-gray-700 mb-4 text-sm md:text-base">
                A Load Balancer (LB) sits between users and backend servers, distributing incoming traffic across multiple servers to ensure no single server is overloaded.
              </p>
              <p className="text-gray-700 mb-6 text-sm md:text-base">
                It acts as a traffic controller, monitoring server health and routing requests only to healthy instances.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-6">
                {["Availability", "Scalability", "Resilience", "Distribution"].map((badge) => (
                  <span key={badge} className="px-4 py-2 rounded-full border border-blue-200 text-blue-700 text-sm font-medium">
                    {badge}
                  </span>
                ))}
              </div>

              <p className="text-gray-700 text-sm md:text-base">
                Load balancers can operate at Layer 4 (Transport Layer) or Layer 7 (Application Layer), depending on routing complexity.
              </p>
            </section>

            <hr className="border-gray-100 mb-12" />

            {/* Section 2 */}
            <section className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-blue-600 mb-4 flex items-center">
                <span className="mr-2">🔄</span> How Traffic Flows
              </h2>
              <p className="text-gray-700 mb-6 text-sm md:text-base">
                Understanding request flow clarifies the importance of load balancing:
              </p>
              
              <div className="flex flex-wrap gap-3 mb-6">
                {["DNS", "Public IP", "Routing", "Private Servers"].map((badge) => (
                  <span key={badge} className="px-4 py-2 rounded-full border border-blue-200 text-blue-700 text-sm font-medium">
                    {badge}
                  </span>
                ))}
              </div>

              <div className="bg-[#f4f7fb] p-6 rounded-lg border border-gray-100 mb-6">
                <ul className="list-disc pl-5 space-y-3 text-gray-700 text-sm md:text-base">
                  <li>User sends request to a domain</li>
                  <li>DNS resolves domain to Load Balancer IP</li>
                  <li>Load Balancer selects a healthy backend server</li>
                  <li>Response travels back through LB to user</li>
                </ul>
              </div>

              <p className="text-gray-700 text-sm md:text-base">
                This design keeps backend servers private and protected from direct internet exposure.
              </p>
            </section>

            <hr className="border-gray-100 mb-12" />

            {/* Section 3 */}
            <section className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-blue-600 mb-4 flex items-center">
                <span className="mr-2">🛣️</span> Load Balancing Strategies
              </h2>
              <p className="text-gray-700 mb-6 text-sm md:text-base">
                Different systems require different routing strategies based on workload behavior.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-6">
                {["Round Robin", "Least Connections", "IP Hashing", "Weighted Routing"].map((badge) => (
                  <span key={badge} className="px-4 py-2 rounded-full border border-blue-200 text-blue-700 text-sm font-medium">
                    {badge}
                  </span>
                ))}
              </div>

              <p className="text-gray-700 mb-4 text-sm md:text-base leading-relaxed">
                Round Robin distributes traffic evenly. Least Connections routes to the least busy server. IP Hashing ensures session consistency. Weighted routing prioritizes stronger servers.
              </p>
              <p className="text-gray-700 text-sm md:text-base">
                The right strategy depends on state management, traffic spikes, and SLA requirements.
              </p>
            </section>

            <hr className="border-gray-100 mb-12" />

            {/* Section 4 */}
            <section className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-blue-600 mb-4 flex items-center">
                <span className="mr-2">❤️</span> Health Checks & Failover
              </h2>
              <p className="text-gray-700 mb-6 text-sm md:text-base">
                Load balancers continuously monitor backend servers to ensure reliability.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-6">
                {["Monitoring", "Detection", "Failover", "Recovery"].map((badge) => (
                  <span key={badge} className="px-4 py-2 rounded-full border border-blue-200 text-blue-700 text-sm font-medium">
                    {badge}
                  </span>
                ))}
              </div>

              <div className="bg-[#f4f7fb] p-6 rounded-lg border border-gray-100 mb-6">
                <ul className="list-disc pl-5 space-y-3 text-gray-700 text-sm md:text-base">
                  <li>Unhealthy servers are removed from rotation</li>
                  <li>Traffic is redirected automatically</li>
                  <li>Recovered servers are added back seamlessly</li>
                </ul>
              </div>

              <p className="text-gray-700 text-sm md:text-base">
                This enables zero-downtime deployments and high availability in production systems.
              </p>
            </section>

            <hr className="border-gray-100 mb-12" />

            {/* Section 5 */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-blue-600 mb-4 flex items-center">
                <span className="mr-2">🧠</span> Final System Design Insight
              </h2>
              <p className="text-gray-700 mb-4 text-sm md:text-base">
                Load balancers do more than distribute traffic — they enable controlled growth, improve uptime, and protect infrastructure.
              </p>
              <p className="text-gray-700 mb-6 text-sm md:text-base">
                In modern cloud-native systems, scaling servers is easy. Scaling without a load balancer is not.
              </p>
              
              <div className="flex flex-wrap gap-3">
                {["Uptime", "Protection", "Scale", "Stability"].map((badge) => (
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
