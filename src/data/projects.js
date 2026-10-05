export const projects = [
  {
    title: 'Invoice Exception Agent',
    href: 'https://github.com/AbhigyanD/Invoice-Exception-Agent-LangGraph-architecture',
    description:
      'LangGraph pipeline for accounts payable. An LLM extracts invoice fields; code validates the arithmetic. A three-way SQL match compares every line against the vendor\'s open POs and goods receipts. Clean invoices post automatically. Exceptions pause at a LangGraph interrupt — the checkpoint lives in Postgres, so a reviewer can approve three days later and the run continues exactly where it stopped.',
    tags: ['Python', 'LangGraph', 'FastAPI', 'Postgres', 'Anthropic'],
    featured: true,
  },
  {
    title: 'Reflexion Coding Agent',
    href: 'https://github.com/AbhigyanD/reflexion-coding-agent',
    description:
      'From-scratch implementation of Reflexion (NeurIPS 2023) applied to code generation. An Actor writes a solution, an Evaluator runs it against unit tests in a sandboxed subprocess, and a Reflector explains the failure in words that carry into the next attempt as episodic memory. Benchmarked against single-shot and plain-retry baselines under the same trial budget.',
    tags: ['Python', 'LLM Agents', 'Evaluation', 'Paper Implementation'],
    featured: true,
  },
  {
    title: 'NanoEX HFT System',
    href: 'https://github.com/AbhigyanD/HFT_System',
    description:
      'Multi-threaded trading system in C++17: lock-free data structures, a work-stealing thread pool, an order matching engine and pre-trade risk checks. A momentum strategy runs on RSI, momentum and MACD signals, with a live GUI for prices, signals and latency.',
    tags: ['C++17', 'Concurrency', 'Lock-free', 'Trading Systems'],
  },
  {
    title: 'Voice Activity Detection',
    href: 'https://github.com/AbhigyanD/Voice-Activity-Detection',
    description:
      'Two-stage pipeline that finds speech in noisy audio. Stage one denoises (noisereduce, with spectral subtraction as a CPU fallback); stage two classifies frames with WebRTC VAD or a GMM over MFCC, energy and zero-crossing features, then merges them into speech segments with hysteresis.',
    tags: ['Python', 'Audio ML', 'GMM', 'WebRTC VAD'],
  },
  {
    title: 'Agentic Dating',
    href: 'https://github.com/AbhigyanD/Dating_Agent',
    description:
      'Each person gets an agent that reads their public LinkedIn and Instagram and builds a profile of needs, interests and values, citing the exact quote behind each one. Agents then go on simulated three-round dates with every other agent and each scores the match for its own person, producing a personal ranking with every conversation readable.',
    tags: ['Python', 'Multi-agent', 'LLM Agents'],
  },
  {
    title: 'Financial RAG',
    href: 'https://github.com/AbhigyanD/Financial-Rag',
    description:
      'Question answering over financial PDFs with page-level citations, built stage by stage without framework wrappers: loading, chunking, embedding, retrieval and answering with Claude. The groundwork for the Invoice Exception Agent, where retrieval became one tool inside a larger stateful workflow.',
    tags: ['Python', 'RAG', 'Vector Search', 'Anthropic'],
  },
]
