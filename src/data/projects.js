export const projects = [
  {
    title: 'Invoice Exception Agent',
    href: 'https://github.com/AbhigyanD/invoice-exception-agent',
    description:
      'LangGraph pipeline for accounts payable. An LLM extracts invoice fields; code validates the arithmetic. A three-way SQL match compares every line against the vendor\'s open POs and goods receipts. Clean invoices post automatically. Exceptions pause at a LangGraph interrupt — the checkpoint lives in Postgres, so a reviewer can approve three days later and the run continues exactly where it stopped.',
    tags: ['Python', 'LangGraph', 'FastAPI', 'Postgres', 'Anthropic'],
    featured: true,
  },
  {
    title: 'Voice Activity Detection',
    href: 'https://github.com/AbhigyanD/Voice-Activity-Detection',
    description:
      'Two-stage VAD pipeline built to replicate a production ML interview architecture: denoising → feature extraction → WebRTC or GMM-based classification → labeled speech segments. Primary denoiser falls back from noisereduce to spectral subtraction on CPU.',
    tags: ['Python', 'Audio ML', 'GMM', 'WebRTC VAD'],
  },
  {
    title: 'Financial RAG',
    href: 'https://github.com/AbhigyanD/Financial-Rag',
    description:
      'Retrieval-augmented generation over financial documents, built stage by stage without framework wrappers. Predecessor to the Invoice Exception Agent, where retrieval became one tool inside a larger stateful workflow.',
    tags: ['Python', 'RAG', 'Vector Search'],
  },
  {
    title: 'Dating Agent',
    href: 'https://github.com/AbhigyanD/Dating_Agent',
    description:
      'Multi-step LLM agent that reasons over profiles and conversation history to draft and send messages. Tool-using loop with memory across sessions.',
    tags: ['Python', 'LLM Agents'],
  },
  {
    title: 'Option Pricing',
    href: 'https://github.com/AbhigyanD/Option_Pricing',
    description:
      'Options pricing models implemented from scratch — Black-Scholes and numerical methods for derivatives valuation.',
    tags: ['Python', 'Quantitative Finance'],
  },
  {
    title: 'StockSimple',
    href: 'https://github.com/stockAppTeam/stockSimple',
    description:
      'Full-stack web app for stock tracking, watchlists, and backtesting investment strategies. Built for people who don\'t want a Bloomberg terminal in their browser.',
    tags: ['Full Stack', 'MVC'],
  },
  {
    title: 'RAG from Scratch',
    href: 'https://github.com/AbhigyanD/New-Rag-from-Scratch-',
    description:
      'A second pass at building a RAG system from scratch — no AI-assisted code. Every component hand-rolled to understand what frameworks actually do under the hood.',
    tags: ['Python', 'RAG'],
  },
]
