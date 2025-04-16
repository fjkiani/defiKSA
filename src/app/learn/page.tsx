'use client'; // Needed for useState

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import DocsNav from '@/components/docs/DocsNav';
import DocsSection from '@/components/docs/DocsSection';
import { LearningConcept } from '@/components/docs/DocsNav';
import { LearningConceptWithContent } from '@/types/docs';

// Define the learning concepts data structure
const learningConcepts: LearningConceptWithContent[] = [
  {
    id: 'what-is-defiksa',
    title: 'What is DefiKSA?',
    simpleContent: 'DefiKSA is an innovative financial platform leveraging Artificial Intelligence (AI) and blockchain technology to offer secure, transparent, and Sharia-compliant financial solutions. Our primary goal is to empower users, initially focusing on the Kingdom of Saudi Arabia (KSA), with advanced tools for navigating the world of digital finance ethically and efficiently.',
    technicalContent: 'Built using the Onchain AI Oracle (ORA) framework, DefiKSA enables AI agents to execute complex financial strategies directly and verifiably on blockchain networks. The architecture combines off-chain AI computation with on-chain execution and verification, focusing on modularity and integration with various DeFi protocols screened for Sharia compliance.',
  },
  {
    id: 'blockchain-basics',
    title: 'Blockchain Basics',
    simpleContent: 'Think of a blockchain as a shared, digital notebook that\'s duplicated across many computers. When a new transaction happens, it\'s added as a "block" to the chain. Because it\'s shared and cryptographically secured, it\'s very difficult to change past entries, making it transparent and trustworthy for recording ownership and transactions.',
    technicalContent: 'Technically, a blockchain is a distributed, immutable ledger. Transactions are grouped into blocks, cryptographically hashed, and linked sequentially. Consensus mechanisms (like Proof-of-Work or Proof-of-Stake) ensure agreement among network participants on the validity of new blocks, maintaining data integrity without a central authority.',
  },
  {
    id: 'intro-to-defi',
    title: 'Introduction to DeFi',
    simpleContent: 'Decentralized Finance (DeFi) aims to rebuild traditional financial services (like trading, lending, borrowing) using blockchain technology. The goal is to create systems that are open to anyone, operate without traditional banks or intermediaries, and offer more transparency.',
    technicalContent: 'DeFi utilizes smart contracts on blockchains (primarily Ethereum and compatible chains) to automate financial protocols. Key areas include decentralized exchanges (DEXs), lending/borrowing platforms (often requiring Sharia-compliant alternatives), derivatives, and yield generation strategies. Interactions typically occur via non-custodial wallets.',
  },
  {
    id: 'sharia-compliance-principles',
    title: 'Sharia Compliance Principles',
    simpleContent: 'Islamic finance operates on ethical principles derived from Sharia. Key prohibitions include Riba (interest), Gharar (excessive uncertainty or ambiguity in contracts), and Maysir (gambling or speculation). It emphasizes risk-sharing, asset-backing, and investment in productive, ethical activities, avoiding sectors like alcohol, pork, and conventional financial services.',
    technicalContent: 'Applying Sharia principles to DeFi involves screening assets and protocols for permissible business activities and acceptable financial ratios (e.g., debt-to-equity, non-compliant income thresholds based on standards like AAOIFI). Financial products must be structured to avoid interest, often using profit-sharing (Mudarabah), joint venture (Musharakah), or lease-based (Ijarah) models.',
  },
  {
    id: 'defiksa-sharia-compliance',
    title: 'DefiKSA & Sharia Compliance',
    simpleContent: 'DefiKSA integrates Sharia principles by using AI agents for automated screening against compliance rules (like AAOIFI standards), directing interactions towards vetted protocols and profit-sharing models, executing only permissible strategies (like those involving digital Sukuk), systematically avoiding interest (Riba), excessive uncertainty (Gharar), and gambling (Maysir), and offering tools like Zakat calculation assistance. Transparency is ensured via the ORA framework.',
    technicalContent: 'Technical implementation involves: Rule-based engines for screening against AAOIFI financial ratios and business activity filters. Whitelisting mechanisms for compliant protocols and token interactions (e.g., Mudarabah pools). Strategy builders constrained to Sharia-compliant components. Agent logic explicitly avoiding interest-bearing DeFi functions and favoring profit/loss sharing or fee-based returns. ORA-verified transaction execution ensures provenance and transparency.',
  },
  {
    id: 'ai-agents',
    title: 'How DefiKSA AI Agents Work',
    simpleContent: 'DefiKSA\'s AI agents, built on the ORA Framework, autonomously manage financial tasks according to user-defined, Sharia-compliant strategies. They perform automated screening, interact with approved protocols, execute strategies, monitor for compliance drift, and ensure all actions are verifiable on the blockchain for transparency. Examples include Halal Asset Screeners and Profit-Sharing Pool Managers.',
    technicalContent: 'Agents utilize ORA for verifiable on-chain execution. Core logic includes state machines for strategy execution, API integrations for compliance data feeds (screening), smart contract interaction modules (for vetted protocols), and monitoring loops triggering alerts or automated adjustments based on pre-set compliance parameters. Configuration involves setting risk tolerance, strategy parameters, and specific compliance rulesets.',
  },
  {
    id: 'ora-framework',
    title: 'ORA Framework Explained',
    simpleContent: 'ORA (Onchain AI Oracle) is a technology that allows Artificial Intelligence calculations and decisions to be verified and used directly on the blockchain. Think of it as a bridge that lets complex AI logic securely interact with smart contracts, ensuring that AI actions within systems like DefiKSA are transparent and trustworthy.',
    technicalContent: 'ORA enables verifiable AI inference on-chain. It allows smart contracts to request computations from AI models (potentially executed off-chain) and receive results along with cryptographic proofs (e.g., zk-SNARKs) verifying the integrity of the computation. This overcomes the limitations of on-chain computation while maintaining blockchain\'s trust assumptions, crucial for DefiKSA\'s autonomous agents.',
  },
  {
    id: 'key-features',
    title: 'Key Platform Features',
    simpleContent: 'DefiKSA provides a suite of tools including: A Risk Assessment dashboard evaluating protocols based on various factors including Sharia compliance, real-time Protocol Monitoring for key metrics, an intuitive Agent Creation interface to build and deploy custom AI agents, and an AI Assistant for querying DeFi information.',
  },
  {
    id: 'getting-started',
    title: 'Getting Started',
    simpleContent: 'To begin using DefiKSA (once available), you\'ll typically need a compatible crypto wallet (like MetaMask). Connect your wallet to the platform, explore the dashboard features like Protocol Monitoring and Risk Assessment, and then experiment with creating a simple AI agent using the guided interface. More detailed tutorials will be available.',
  },
  {
    id: 'investor-relations',
    title: 'Investor Relations',
    simpleContent: 'The global Islamic finance market represents a rapidly growing, multi-trillion dollar opportunity, yet it remains underserved by modern digital finance solutions. DefiKSA is uniquely positioned to capture significant share by offering the first AI-powered, blockchain-based platform specifically designed for Sharia compliance. Our technology provides transparency, security, and efficiency advantages. We aim to establish leadership in the KSA market before expanding globally, revolutionizing ethical finance worldwide.',
    technicalContent: 'Market Potential: Cite relevant Islamic Finance Development Indicator (IFDI) reports or market research on the size and growth rate of the addressable market (>$3T). Competitive Edge: Detail how AI-driven compliance screening and ORA-verified execution offer superior transparency and efficiency compared to manual processes or traditional fintech. Traction/Roadmap: Briefly outline key development milestones, user acquisition strategy, and potential revenue models (e.g., tiered platform access, agent performance fees - subject to Sharia review). Highlight potential for B2B partnerships.',
  },
  // Add more concepts as needed
];

const LearnPage = () => {
  const [activeConcept, setActiveConcept] = useState<string>(learningConcepts[0]?.id || '');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Observer to update active section based on scroll position
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveConcept(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-80px 0px -80% 0px',
        threshold: [0, 0.2, 0.4, 0.6, 0.8, 1]
      }
    );

    const sectionElements = document.querySelectorAll('.docs-section');
    sectionElements.forEach((section) => observer.observe(section));

    return () => {
      sectionElements.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // Track scroll progress and show/hide back to top button
  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
      
      // Show back to top button after 300px scroll
      setShowBackToTop(winScroll > 300);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top handler
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Scroll into view handler for manual navigation
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 100; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-900/20 to-gray-900 relative">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-600/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/3 left-0 w-1/2 h-1/2 bg-blue-900/10 rounded-full blur-3xl -z-10"></div>
      
      {/* Reading progress indicator */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gray-800 z-50">
        <div 
          className="h-full bg-blue-500"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>
      
      {/* Learn Content */}
      <main className="pt-28 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              DefiKSA <span className="text-blue-400">Learning Hub</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your comprehensive guide to understanding AI-powered, Sharia-compliant financial solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Navigation - Fixed on Desktop */}
            <div className="lg:col-span-1">
              <div className="lg:sticky lg:top-28">
                <DocsNav
                  concepts={learningConcepts}
                  activeConcept={activeConcept}
                  setActiveConcept={(id) => {
                    setActiveConcept(id);
                    scrollToSection(id);
                  }}
                />
                
                <div className="mt-6 text-center">
                  <Link 
                    href="/" 
                    className="inline-flex items-center text-sm text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-[-4px]"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Home
                  </Link>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="bg-gray-800/30 rounded-xl p-6 md:p-10 backdrop-blur-sm border border-gray-700/30 shadow-xl">
                {learningConcepts.map((concept) => (
                  <DocsSection key={concept.id} concept={concept} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-all duration-300 z-30 ${
          showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Back to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 11l7-7 7 7M5 19l7-7 7 7" />
        </svg>
      </button>
    </div>
  );
};

export default LearnPage; 