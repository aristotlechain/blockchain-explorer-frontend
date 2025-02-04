import React from 'react';
import styles from './styles/Home.module.css';

// Here I've added a Static Component for Home Dashboard Beautification

const Home = () => {

    const latestBlocks = [
        { height: 123456, timestamp: '2023-09-20 14:30', miner: '0xabc...123', transactions: 15 },
        { height: 123455, timestamp: '2023-09-20 14:28', miner: '0xdef...456', transactions: 8 },
        { height: 123454, timestamp: '2023-09-20 14:25', miner: '0xghi...789', transactions: 23 },
    ];

    const latestTransactions = [
        { hash: '0x1a2b...c3d4', from: '0xabc...123', to: '0xdef...456', value: '1.5 ETH' },
        { hash: '0x3e4f...g5h6', from: '0xghi...789', to: '0xjkl...012', value: '0.8 ETH' },
        { hash: '0x5i6j...k7l8', from: '0xmno...345', to: '0xpqr...678', value: '2.1 ETH' },
    ];

    return (
        <div className={styles.container}>
            {/* Header Section */}
            <div className={styles.header}>
                <h1 className={styles.title}>Blockchain Explorer</h1>
                <p className={styles.subtitle}>Explore transactions, blocks, and smart contracts on the network</p>
            </div>

            {/* Stats Cards */}
            <div className={styles.statsGrid}>
                <div className={styles.statCard}>
                    <h3>Total Blocks</h3>
                    <p>1,234,567</p>
                    <span className={styles.statHighlightGreen}>+ 142 new blocks</span>
                </div>
                <div className={styles.statCard}>
                    <h3>Total Transactions</h3>
                    <p>45,678,901</p>
                    <span className={styles.statHighlightBlue}>+ 1,234 txns/hour</span>
                </div>
                <div className={styles.statCard}>
                    <h3>Network Hash Rate</h3>
                    <p>524.76 TH/s</p>
                    <span className={styles.statHighlightPurple}>↑ 12.4% last 24h</span>
                </div>
            </div>

            {/* Latest Blocks */}
            <div className={styles.section}>
                <h2>Latest Blocks</h2>
                <div className={styles.blocksList}>
                    {latestBlocks.map((block, index) => (
                        <div key={index} className={styles.blockItem}>
                            <div className={styles.blockContent}>
                                <div>
                                    <span className={styles.blockHeight}>Block #{block.height}</span>
                                    <span className={styles.blockTimestamp}>{block.timestamp}</span>
                                </div>
                                <div className={styles.blockDetails}>
                                    <p>{block.transactions} transactions</p>
                                    <p>Miner: {block.miner}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Latest Transactions */}
            <div className={styles.section}>
                <h2>Latest Transactions</h2>
                <div className={styles.transactionsTable}>
                    <table>
                        <thead>
                        <tr>
                            <th>Transaction Hash</th>
                            <th>From</th>
                            <th>To</th>
                            <th>Value</th>
                        </tr>
                        </thead>
                        <tbody>
                        {latestTransactions.map((txn, index) => (
                            <tr key={index} className={styles.transactionRow}>
                                <td className={styles.hashCell}>{txn.hash}</td>
                                <td>{txn.from}</td>
                                <td>{txn.to}</td>
                                <td className={styles.valueCell}>{txn.value}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Home;