'use client';

import React, { useState } from 'react';
import { X, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface WarrantyCheckModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface WarrantyResult {
  imei: string;
  status: string;
  brand: string;
  model: string;
  warrantyExpiry: string;
  kemenperinStatus: string;
  coverage: string;
}

export default function WarrantyCheckModal({ isOpen, onClose }: WarrantyCheckModalProps) {
  const [imei, setImei] = useState('');
  const [result, setResult] = useState<WarrantyResult | null>(null);
  const [isSearching, setIsSearching] = useState(false);

  if (!isOpen) return null;

  const handleCheck = (imeiToUse?: string) => {
    const targetImei = imeiToUse || imei;
    if (!targetImei.trim()) return;

    setIsSearching(true);
    setResult(null);

    setTimeout(() => {
      setIsSearching(false);
      setResult({
        imei: targetImei,
        status: 'Aktif & Terdaftar Resmi',
        brand: targetImei.startsWith('35') ? 'Samsung Official SEIN' : 'Apple Official iBox',
        model: targetImei.startsWith('35') ? 'Samsung Galaxy A55 5G (8/256GB)' : 'iPhone 15 128GB Black',
        warrantyExpiry: '28 Oktober 2027',
        kemenperinStatus: 'Terdaftar di Database Kemenperin / Bea Cukai RI',
        coverage: 'Perbaikan Sparepart & Layanan Resmi Bebas Biaya di Seluruh Service Center Resmi Indonesia'
      });
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div onClick={onClose} className="fixed inset-0 bg-black/50 backdrop-blur-xs" />

      {/* Modal Card */}
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl z-10 overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-[#0066FF] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-6 h-6 stroke-[2.2]" />
            <div>
              <h3 className="font-bold text-lg">Cek Garansi & Keaslian Unit</h3>
              <p className="text-xs text-blue-100">Cek status garansi resmi SEIN, TAM, iBox, Digimap</p>
            </div>
          </div>
          <button onClick={onClose} className="p-1.5 text-white/80 hover:text-white rounded-lg">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase text-gray-700 mb-1.5">
              Masukkan Nomor IMEI (15 Digit)
            </label>
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Contoh: 358492019482710"
                value={imei}
                onChange={(e) => setImei(e.target.value)}
                maxLength={15}
                className="w-full pl-3.5 pr-24 py-2.5 bg-gray-50 border border-gray-300 rounded-xl text-sm font-mono focus:outline-none focus:border-[#0066FF]"
              />
              <button
                type="button"
                onClick={() => handleCheck()}
                disabled={isSearching}
                className="absolute right-1 top-1 bottom-1 px-4 bg-[#0066FF] hover:bg-[#0052cc] text-white font-bold text-xs rounded-lg transition-colors cursor-pointer"
              >
                {isSearching ? 'Memeriksa...' : 'Cek Status'}
              </button>
            </div>
          </div>

          {/* Quick Example IMEI Buttons */}
          <div className="flex items-center gap-2 text-xs">
            <span className="text-gray-400">Coba contoh IMEI:</span>
            <button
              onClick={() => {
                setImei('358492019482710');
                handleCheck('358492019482710');
              }}
              className="text-[#0066FF] underline font-mono cursor-pointer"
            >
              Samsung SEIN
            </button>
            <span className="text-gray-300">|</span>
            <button
              onClick={() => {
                setImei('014928104829103');
                handleCheck('014928104829103');
              }}
              className="text-[#0066FF] underline font-mono cursor-pointer"
            >
              Apple iBox
            </button>
          </div>

          {/* Result Card */}
          {result && (
            <div className="p-4 bg-emerald-50/70 border border-emerald-200 rounded-xl space-y-2.5 animate-in fade-in duration-300">
              <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span>Unit Original & Bergaransi Resmi</span>
              </div>
              
              <div className="grid grid-cols-2 gap-2 text-xs pt-1 border-t border-emerald-100">
                <div>
                  <span className="text-gray-500 block">Model Smartphone:</span>
                  <span className="font-semibold text-gray-900">{result.model}</span>
                </div>
                <div>
                  <span className="text-gray-500 block">Distributor Resmi:</span>
                  <span className="font-semibold text-gray-900">{result.brand}</span>
                </div>
                <div>
                  <span className="text-gray-500 block">Status Kemenperin:</span>
                  <span className="font-semibold text-emerald-700">Valid & Terdaftar</span>
                </div>
                <div>
                  <span className="text-gray-500 block">Masa Berlaku Garansi:</span>
                  <span className="font-semibold text-gray-900">{result.warrantyExpiry}</span>
                </div>
              </div>

              <p className="text-[11px] text-gray-600 pt-1 border-t border-emerald-100">
                {result.coverage}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
