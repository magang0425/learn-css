import './App.css'

import React, { useState } from 'react';

const App = () => {
    const [totalSets, setTotalSets] = useState('');
    const [buyXGetNRule, setBuyXGetNRule] = useState('');
    const [buyYGetNRule, setbuyYGetNRule] = useState('');
    const [buySets, setBuySets] = useState(0);
    const [freeSets, setFreeSets] = useState(0);

    const calculateSets = () => {
        const buyCount= parseInt(buyXGetNRule);
        const freeCount = parseInt(buyYGetNRule);
        const total = parseInt(totalSets);

        const quotient = Math.floor(total / (buyCount + freeCount));
        const remainder = total % (buyCount + freeCount);

        setBuySets(quotient * buyCount + Math.min(remainder, buyCount));
        setFreeSets(quotient * freeCount + Math.max(remainder - buyCount, 0));
    };

    return (
        <>
            <div className="flex flex-col gap-2 m-16">
                <p className="font-sans text-6xl text-center mb-10">
                    小露露计算器
                </p>
                <div className="flex items-center">
                    <label htmlFor="total-sets" className="mr-2">总套数：</label>
                    <input
                        id="total-sets"
                        value={totalSets}
                        onChange={e => setTotalSets(e.target.value)}
                        className="border border-gray-400 p-1 rounded-md"
                    />
                </div>

                <div className="flex items-center ">
                    <label htmlFor="buy-x-get-n-rule" className="mr-2">购买规则：</label>
                    <label htmlFor="buy-x-get-n-rule md:whitespace-pre" className="mr-2">买</label>
                    <input
                        id="buy-x-get-n-rule"
                        value={buyXGetNRule}
                        onChange={e => setBuyXGetNRule(e.target.value)}
                        className="border border-gray-400 p-1 rounded-md mr-2"
                    />
                    <label htmlFor="buy-x-get-n-rule" className="mr-2">送</label>
                    <input
                        id="buy-y-get-n-rule"
                        value={buyYGetNRule}
                        onChange={e => setbuyYGetNRule(e.target.value)}
                        className="border border-gray-400 p-1 rounded-md"
                    />
                </div>

                <button
                    onClick={calculateSets}
                    className="bg-gray-900 text-white font-bold py-2 px-4 border-b-4 hover:border-b-2 border-gray-500  rounded-full"
                >
                    计算
                </button>

                <div className="flex items-center">
                    <label htmlFor="buy-sets" className="mr-2">购买套数：</label>
                    <span id="buy-sets">{buySets}</span>
                </div>

                <div className="flex items-center">
                    <label htmlFor="free-sets" className="mr-2">赠送套数：</label>
                    <span id="free-sets">{freeSets}</span>
                </div>
            </div>




        </>
    );
};

export default App;

