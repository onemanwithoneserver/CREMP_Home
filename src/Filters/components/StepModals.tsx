import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ShoppingCart,
  Calendar,
  MapPin,
  Store,
  Building2,
  Users,
  Building,
  Utensils,
  ShoppingBag,
  GraduationCap,
  HeartPulse,
  Sparkles,
  Dumbbell,
  Hotel,
  Car,
  Factory,
  LayoutGrid,
  Check,
} from "lucide-react";
import {
  COMMERCIAL_PROPERTY_TYPES,
  BUSINESS_INDUSTRIES,
  COMMERCIAL_BUDGET_PRESETS,
  BUSINESS_BUDGET_PRESETS,
} from "../data";

interface ModalWrapperProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

function ModalWrapper({
  isOpen,
  onClose,
  title,
  subtitle,
  children,
}: ModalWrapperProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/60 backdrop-blur-xs">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0"
        />

        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ type: "spring", damping: 28, stiffness: 300 }}
          className="relative w-full max-w-lg bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl p-5 sm:p-6 z-10 max-h-[90vh] overflow-y-auto"
        >
          <div className="w-12 h-1 bg-gray-200 rounded-full mx-auto mb-4 sm:hidden" />

          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-[#0a1128]">
                {title}
              </h3>
              {subtitle && (
                <p className="text-xs text-gray-500 mt-0.5">{subtitle}</p>
              )}
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {children}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

// 1. Buy / Lease Modal
export function BuyLeaseModal({
  isOpen,
  onClose,
  selectedType,
  onSelect,
}: {
  isOpen: boolean;
  onClose: () => void;
  selectedType: "Buy" | "Lease";
  onSelect: (type: "Buy" | "Lease") => void;
}) {
  return (
    <ModalWrapper
      isOpen={isOpen}
      onClose={onClose}
      title="What are you looking for?"
      subtitle="Choose between buying or leasing commercial property"
    >
      <div className="space-y-3 my-4">
        <button
          type="button"
          onClick={() => onSelect("Buy")}
          className={`w-full p-4 rounded-xl border-2 flex items-center justify-between transition-all ${
            selectedType === "Buy"
              ? "border-[#d4af37] bg-[#d4af37]/10 text-[#0a1128] font-bold shadow-xs"
              : "border-gray-200 hover:border-gray-300 text-gray-700 bg-white"
          }`}
        >
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-[#f59e0b]/15 text-[#ea580c] flex items-center justify-center">
              <ShoppingCart className="w-5 h-5" />
            </div>
            <span className="text-base font-semibold">Buy</span>
          </div>
          <div
            className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
              selectedType === "Buy"
                ? "border-[#d4af37] bg-[#d4af37]"
                : "border-gray-300"
            }`}
          >
            {selectedType === "Buy" && (
              <div className="w-2 h-2 rounded-full bg-white" />
            )}
          </div>
        </button>

        <button
          type="button"
          onClick={() => onSelect("Lease")}
          className={`w-full p-4 rounded-xl border-2 flex items-center justify-between transition-all ${
            selectedType === "Lease"
              ? "border-[#d4af37] bg-[#d4af37]/10 text-[#0a1128] font-bold shadow-xs"
              : "border-gray-200 hover:border-gray-300 text-gray-700 bg-white"
          }`}
        >
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-[#3b82f6]/15 text-[#2563eb] flex items-center justify-center">
              <Calendar className="w-5 h-5" />
            </div>
            <span className="text-base font-semibold">Lease</span>
          </div>
          <div
            className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
              selectedType === "Lease"
                ? "border-[#d4af37] bg-[#d4af37]"
                : "border-gray-300"
            }`}
          >
            {selectedType === "Lease" && (
              <div className="w-2 h-2 rounded-full bg-white" />
            )}
          </div>
        </button>
      </div>

      <button
        type="button"
        onClick={onClose}
        className="w-full mt-4 py-3 rounded-xl bg-[#f59e0b] hover:bg-[#d97706] text-white font-bold text-sm tracking-wide shadow-md transition-all active:scale-[0.99]"
      >
        Continue
      </button>
    </ModalWrapper>
  );
}

// 2. Property Type Modal
export function PropertyTypeModal({
  isOpen,
  onClose,
  selectedType,
  onSelect,
}: {
  isOpen: boolean;
  onClose: () => void;
  selectedType: string;
  onSelect: (typeId: string) => void;
}) {
  const getIcon = (name: string) => {
    switch (name) {
      case "MapPin":
        return <MapPin className="w-6 h-6 text-[#16a34a]" />;
      case "Store":
        return <Store className="w-6 h-6 text-[#ea580c]" />;
      case "Building2":
        return <Building2 className="w-6 h-6 text-[#9333ea]" />;
      case "Users":
        return <Users className="w-6 h-6 text-[#0891b2]" />;
      case "Building":
        return <Building className="w-6 h-6 text-[#2563eb]" />;
      default:
        return <Building2 className="w-6 h-6 text-gray-600" />;
    }
  };

  return (
    <ModalWrapper
      isOpen={isOpen}
      onClose={onClose}
      title="Select Property Type"
      subtitle="Choose the type of commercial property"
    >
      <div className="grid grid-cols-2 gap-3 my-4">
        {COMMERCIAL_PROPERTY_TYPES.map((pt) => {
          const isSelected = selectedType === pt.id;
          return (
            <button
              key={pt.id}
              type="button"
              onClick={() => onSelect(pt.id)}
              className={`p-4 rounded-xl border-2 flex flex-col items-center justify-center text-center gap-2.5 transition-all ${
                isSelected
                  ? "border-[#d4af37] bg-[#d4af37]/10 text-[#0a1128] font-bold shadow-xs"
                  : "border-gray-100 hover:border-gray-200 bg-white text-gray-700 hover:bg-gray-50/80"
              }`}
            >
              <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center">
                {getIcon(pt.iconName)}
              </div>
              <span className="text-xs font-semibold">{pt.name}</span>
            </button>
          );
        })}
      </div>

      <button
        type="button"
        onClick={onClose}
        className="w-full mt-4 py-3 rounded-xl bg-[#f59e0b] hover:bg-[#d97706] text-white font-bold text-sm tracking-wide shadow-md transition-all active:scale-[0.99]"
      >
        Continue
      </button>
    </ModalWrapper>
  );
}

// 3. Commercial Budget Modal
export function BudgetModal({
  isOpen,
  onClose,
  selectedPreset,
  onSelectPreset,
}: {
  isOpen: boolean;
  onClose: () => void;
  selectedPreset: string;
  onSelectPreset: (preset: string) => void;
}) {
  return (
    <ModalWrapper
      isOpen={isOpen}
      onClose={onClose}
      title="Set Your Budget"
      subtitle="Select the price range matching your investment criteria"
    >
      <div className="my-5 text-center">
        <div className="text-2xl font-extrabold text-[#0a1128] tracking-tight">
          ₹ {selectedPreset || "1 - 3 Cr"}
        </div>
        <div className="text-xs text-gray-400 mt-1 font-medium">
          Expected Commercial Price Bracket
        </div>

        <div className="relative my-6 px-4">
          <div className="w-full h-1.5 bg-gray-200 rounded-full relative">
            <div className="absolute left-[20%] right-[30%] top-0 bottom-0 bg-[#f59e0b] rounded-full" />
            <div className="absolute left-[20%] top-1/2 -translate-y-1/2 -translate-x-1/2 w-5 h-5 bg-white border-4 border-[#f59e0b] rounded-full shadow-md cursor-pointer" />
            <div className="absolute right-[30%] top-1/2 -translate-y-1/2 translate-x-1/2 w-5 h-5 bg-white border-4 border-[#f59e0b] rounded-full shadow-md cursor-pointer" />
          </div>
          <div className="flex justify-between text-[11px] text-gray-400 mt-3 font-semibold">
            <span>₹ 10 Lacs</span>
            <span>₹ 10 Cr+</span>
          </div>
        </div>

        <div className="text-left mt-6">
          <label className="text-xs font-semibold text-gray-600 block mb-2.5">
            Quick Select
          </label>
          <div className="flex flex-wrap gap-2">
            {COMMERCIAL_BUDGET_PRESETS.map((preset) => {
              const isSelected = selectedPreset === preset.label;
              return (
                <button
                  key={preset.label}
                  type="button"
                  onClick={() => onSelectPreset(preset.label)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                    isSelected
                      ? "bg-[#f59e0b] border-[#f59e0b] text-white font-bold shadow-xs"
                      : "border-gray-200 text-gray-700 bg-white hover:border-gray-300"
                  }`}
                >
                  {preset.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={onClose}
        className="w-full mt-4 py-3 rounded-xl bg-[#f59e0b] hover:bg-[#d97706] text-white font-bold text-sm tracking-wide shadow-md transition-all active:scale-[0.99]"
      >
        Show Results
      </button>
    </ModalWrapper>
  );
}

// 4. Business Opportunity Industry Modal
export function IndustryModal({
  isOpen,
  onClose,
  selectedIndustry,
  onSelect,
}: {
  isOpen: boolean;
  onClose: () => void;
  selectedIndustry: string;
  onSelect: (industryId: string) => void;
}) {
  const getIcon = (name: string) => {
    switch (name) {
      case "Utensils":
        return <Utensils className="w-5 h-5 text-[#f59e0b]" />;
      case "ShoppingBag":
        return <ShoppingBag className="w-5 h-5 text-[#8b5cf6]" />;
      case "GraduationCap":
        return <GraduationCap className="w-5 h-5 text-[#3b82f6]" />;
      case "HeartPulse":
        return <HeartPulse className="w-5 h-5 text-[#10b981]" />;
      case "Sparkles":
        return <Sparkles className="w-5 h-5 text-[#ec4899]" />;
      case "Dumbbell":
        return <Dumbbell className="w-5 h-5 text-[#f97316]" />;
      case "Hotel":
        return <Hotel className="w-5 h-5 text-[#6366f1]" />;
      case "Car":
        return <Car className="w-5 h-5 text-[#06b6d4]" />;
      case "Factory":
        return <Factory className="w-5 h-5 text-[#059669]" />;
      default:
        return <LayoutGrid className="w-5 h-5 text-gray-500" />;
    }
  };

  return (
    <ModalWrapper
      isOpen={isOpen}
      onClose={onClose}
      title="Select Industry"
      subtitle="Choose the industry you're interested in investing in"
    >
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 my-4">
        {BUSINESS_INDUSTRIES.map((ind) => {
          const isSelected = selectedIndustry === ind.id;
          return (
            <button
              key={ind.id}
              type="button"
              onClick={() => onSelect(ind.id)}
              className={`p-3 rounded-xl border-2 flex flex-col items-center justify-center text-center gap-2 transition-all relative ${
                isSelected
                  ? "border-[#d4af37] bg-[#d4af37]/10 text-[#0a1128] font-bold shadow-xs"
                  : "border-gray-100 hover:border-gray-200 bg-white text-gray-700 hover:bg-gray-50/80"
              }`}
            >
              {isSelected && (
                <div className="absolute top-1.5 right-1.5 w-4 h-4 rounded-full bg-[#f59e0b] text-white flex items-center justify-center">
                  <Check className="w-2.5 h-2.5" />
                </div>
              )}
              <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center">
                {getIcon(ind.iconName)}
              </div>
              <span className="text-[11px] font-semibold line-clamp-1">
                {ind.name}
              </span>
            </button>
          );
        })}
      </div>

      <button
        type="button"
        onClick={onClose}
        className="w-full mt-4 py-3 rounded-xl bg-[#f59e0b] hover:bg-[#d97706] text-white font-bold text-sm tracking-wide shadow-md transition-all active:scale-[0.99]"
      >
        Continue
      </button>
    </ModalWrapper>
  );
}

// 5. Business Opportunity Investment Budget Modal
export function InvestmentBudgetModal({
  isOpen,
  onClose,
  selectedPreset,
  onSelectPreset,
}: {
  isOpen: boolean;
  onClose: () => void;
  selectedPreset: string;
  onSelectPreset: (preset: string) => void;
}) {
  return (
    <ModalWrapper
      isOpen={isOpen}
      onClose={onClose}
      title="Set Your Investment Budget"
      subtitle="Choose the range that best matches your plan"
    >
      <div className="my-5 text-center">
        <div className="text-2xl font-extrabold text-[#0a1128] tracking-tight">
          {selectedPreset || "₹ 25 L - ₹ 50 L"}
        </div>
        <div className="text-xs text-gray-400 mt-1 font-medium">
          Investment Capital Range
        </div>

        <div className="relative my-6 px-4">
          <div className="w-full h-1.5 bg-gray-200 rounded-full relative">
            <div className="absolute left-[30%] right-[40%] top-0 bottom-0 bg-[#f59e0b] rounded-full" />
            <div className="absolute left-[30%] top-1/2 -translate-y-1/2 -translate-x-1/2 w-5 h-5 bg-white border-4 border-[#f59e0b] rounded-full shadow-md cursor-pointer" />
            <div className="absolute right-[40%] top-1/2 -translate-y-1/2 translate-x-1/2 w-5 h-5 bg-white border-4 border-[#f59e0b] rounded-full shadow-md cursor-pointer" />
          </div>
          <div className="flex justify-between text-[11px] text-gray-400 mt-3 font-semibold">
            <span>₹ 1 L</span>
            <span>₹ 10 Cr+</span>
          </div>
        </div>

        <div className="text-left mt-6">
          <label className="text-xs font-semibold text-gray-600 block mb-2.5">
            Quick Select
          </label>
          <div className="flex flex-wrap gap-2">
            {BUSINESS_BUDGET_PRESETS.map((preset) => {
              const isSelected = selectedPreset === preset.label;
              return (
                <button
                  key={preset.label}
                  type="button"
                  onClick={() => onSelectPreset(preset.label)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                    isSelected
                      ? "bg-[#f59e0b] border-[#f59e0b] text-white font-bold shadow-xs"
                      : "border-gray-200 text-gray-700 bg-white hover:border-gray-300"
                  }`}
                >
                  {preset.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={onClose}
        className="w-full mt-4 py-3 rounded-xl bg-[#f59e0b] hover:bg-[#d97706] text-white font-bold text-sm tracking-wide shadow-md transition-all active:scale-[0.99]"
      >
        Show Results
      </button>
    </ModalWrapper>
  );
}
