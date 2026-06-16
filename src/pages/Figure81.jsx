import React from 'react';
import {
  ArrowRight, ArrowDown, Shield, Home, Package, MessageCircle,
  User, ShoppingCart, Search, Edit3, Ban, HelpCircle,
  Mail, ThumbsUp, ClipboardCheck, Wallet, Bell, Upload, Split,
  FileText, CreditCard, CheckCircle, LogIn, UserPlus, Plus, Layers
} from 'lucide-react';

const FlowBox = ({ children, className = '' }) => (
  <div className={`border border-black rounded bg-white px-3 py-2 text-center ${className}`}>
    {children}
  </div>
);

const FlowLabel = ({ children }) => (
  <span className="bg-[#D3D3D3] text-[10px] px-2 py-0.5 rounded font-medium whitespace-nowrap">
    {children}
  </span>
);

const ArrowRightIcon = () => <ArrowRight className="w-4 h-4 shrink-0" />;
const ArrowDownIcon = () => <ArrowDown className="w-4 h-4 shrink-0" />;

export default function Figure81() {
  return (
    <div className="min-h-screen bg-[#F7F7FF] p-4 md:p-8">
      <div className="w-full max-w-6xl mx-auto space-y-8">
        <h1 className="text-xl font-bold text-center">Figure 8.1: Application Navigation & User Flow</h1>

        {/* Admin Flow */}
        <div className="border-2 border-black rounded-lg p-4 bg-white/50">
          <div className="flex items-center gap-2 mb-4">
            <Shield className="w-5 h-5" />
            <span className="text-sm font-bold uppercase tracking-wide">Admin Flow</span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <FlowBox className="bg-yellow-50 min-w-[100px]">
              <span className="text-xs font-bold">Admin Panel</span>
            </FlowBox>
            <div className="flex flex-col items-center gap-4 ml-4">
              <div className="flex items-center gap-2">
                <FlowLabel>Approve / Reject</FlowLabel>
                <ArrowRightIcon />
                <FlowBox><span className="text-xs">Submission Review</span></FlowBox>
              </div>
              <div className="flex items-center gap-2">
                <FlowLabel>Access / Permissions</FlowLabel>
                <ArrowRightIcon />
                <FlowBox><span className="text-xs">Resources Management</span></FlowBox>
              </div>
              <div className="flex items-center gap-2">
                <FlowLabel>Summary / Datasets</FlowLabel>
                <ArrowRightIcon />
                <FlowBox><span className="text-xs">Analytics Dashboard</span></FlowBox>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="border-2 border-black rounded-lg p-4 bg-white/50">
          <div className="flex items-center gap-2 mb-4">
            <Layers className="w-5 h-5" />
            <span className="text-sm font-bold uppercase tracking-wide">Bottom Navigation</span>
          </div>

          {/* Add Product Entry */}
          <div className="flex flex-wrap items-center gap-2 mb-6 ml-4">
            <FlowBox className="bg-green-50">
              <div className="flex items-center gap-1">
                <Plus className="w-3 h-3" />
                <span className="text-xs font-bold">Add Product / Service / Asset</span>
              </div>
            </FlowBox>
            <ArrowRightIcon />
            <FlowBox><span className="text-xs">Choose Type</span></FlowBox>
            <ArrowRightIcon />
            <FlowBox className="bg-blue-50">
              <div className="flex items-center gap-1">
                <LogIn className="w-3 h-3" />
                <span className="text-xs">Login / Register</span>
              </div>
            </FlowBox>
            <ArrowRightIcon />
            <FlowBox className="bg-green-50"><span className="text-xs">Fill Form</span></FlowBox>
          </div>

          {/* Navigation Tabs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Home / Marketplace */}
            <div className="space-y-2">
              <FlowBox className="bg-yellow-50 font-bold">
                <div className="flex items-center justify-center gap-1">
                  <Home className="w-3 h-3" />
                  <span className="text-xs">Home / Marketplace</span>
                </div>
              </FlowBox>
              <div className="space-y-1 ml-2">
                <div className="flex items-center gap-1">
                  <FlowLabel>Tap</FlowLabel>
                  <ArrowRightIcon />
                  <FlowBox><span className="text-[10px]">Product Detail</span></FlowBox>
                  <ArrowRightIcon />
                  <FlowLabel>Buy Now</FlowLabel>
                  <ArrowRightIcon />
                  <FlowBox><span className="text-[10px]">Checkout</span></FlowBox>
                  <ArrowRightIcon />
                  <FlowLabel>Proceed</FlowLabel>
                  <ArrowRightIcon />
                  <FlowBox><span className="text-[10px]">Payment</span></FlowBox>
                  <ArrowRightIcon />
                  <FlowLabel>Success</FlowLabel>
                  <ArrowRightIcon />
                  <FlowBox><span className="text-[10px]">Order Receipt</span></FlowBox>
                </div>
                <div className="flex items-center gap-1 mt-1">
                  <FlowLabel>Search</FlowLabel>
                  <ArrowRightIcon />
                  <FlowBox><span className="text-[10px]">Search & Filter</span></FlowBox>
                </div>
              </div>
            </div>

            {/* My Items */}
            <div className="space-y-2">
              <FlowBox className="bg-blue-50 font-bold">
                <div className="flex items-center justify-center gap-1">
                  <Package className="w-3 h-3" />
                  <span className="text-xs">My Items</span>
                </div>
              </FlowBox>
              <div className="space-y-1 ml-2">
                <div className="flex items-center gap-1">
                  <FlowLabel>Tap</FlowLabel>
                  <ArrowRightIcon />
                  <FlowBox>
                    <div className="flex items-center gap-1">
                      <Edit3 className="w-3 h-3" />
                      <span className="text-[10px]">Edit / Delete</span>
                    </div>
                  </FlowBox>
                </div>
              </div>
            </div>

            {/* Chats */}
            <div className="space-y-2">
              <FlowBox className="bg-purple-50 font-bold">
                <div className="flex items-center justify-center gap-1">
                  <MessageCircle className="w-3 h-3" />
                  <span className="text-xs">Chats</span>
                </div>
              </FlowBox>
              <div className="space-y-1 ml-2">
                <div className="flex items-center gap-1">
                  <FlowLabel>Tap</FlowLabel>
                  <ArrowRightIcon />
                  <FlowBox><span className="text-[10px]">Chat Window</span></FlowBox>
                  <ArrowRightIcon />
                  <FlowBox>
                    <div className="flex items-center gap-1">
                      <Ban className="w-3 h-3" />
                      <span className="text-[10px]">Block / Report / Mute</span>
                    </div>
                  </FlowBox>
                </div>
              </div>
            </div>

            {/* Profile */}
            <div className="space-y-2">
              <FlowBox className="bg-green-50 font-bold">
                <div className="flex items-center justify-center gap-1">
                  <User className="w-3 h-3" />
                  <span className="text-xs">Profile</span>
                </div>
              </FlowBox>
              <div className="space-y-1.5 ml-2">
                <div className="flex items-center gap-1">
                  <FlowLabel>Help</FlowLabel>
                  <ArrowRightIcon />
                  <FlowBox><span className="text-[10px]">Help Center</span></FlowBox>
                  <ArrowRightIcon />
                  <FlowBox><span className="text-[10px]">Contact / Feedback</span></FlowBox>
                </div>
                <div className="flex items-center gap-1">
                  <FlowLabel>Select</FlowLabel>
                  <ArrowRightIcon />
                  <FlowBox><span className="text-[10px]">My Details</span></FlowBox>
                </div>
                <div className="flex items-center gap-1">
                  <FlowLabel>Select</FlowLabel>
                  <ArrowRightIcon />
                  <FlowBox><span className="text-[10px]">Verification</span></FlowBox>
                  <ArrowRightIcon />
                  <FlowBox><span className="text-[10px]">Identity Verified</span></FlowBox>
                </div>
                <div className="flex items-center gap-1">
                  <FlowLabel>Select</FlowLabel>
                  <ArrowRightIcon />
                  <FlowBox><span className="text-[10px]">My Orders</span></FlowBox>
                  <ArrowRightIcon />
                  <FlowBox><span className="text-[10px]">Order Receipt</span></FlowBox>
                </div>
                <div className="flex items-center gap-1">
                  <FlowLabel>Select</FlowLabel>
                  <ArrowRightIcon />
                  <FlowBox><span className="text-[10px]">Wallet</span></FlowBox>
                  <ArrowRightIcon />
                  <FlowBox><span className="text-[10px]">Upload</span></FlowBox>
                  <span className="text-[10px]">/</span>
                  <FlowBox><span className="text-[10px]">Split</span></FlowBox>
                </div>
                <div className="flex items-center gap-1">
                  <FlowLabel>Select</FlowLabel>
                  <ArrowRightIcon />
                  <FlowBox><span className="text-[10px]">Notification Settings</span></FlowBox>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}