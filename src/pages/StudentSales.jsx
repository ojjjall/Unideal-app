import StudentSales from "@/pages/StudentSales.jsx";
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, DollarSign, Package, Download } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import StatCard from '@/components/shared/StatCard';
import FigureLabel from '@/components/shared/FigureLabel';

const salesData = [
  { month: 'Oct', revenue: 120 },
  { month: 'Nov', revenue: 250 },
  { month: 'Dec', revenue: 180 },
  { month: 'Jan', revenue: 320 },
  { month: 'Feb', revenue: 290 },
  { month: 'Mar', revenue: 450 },
];

const topCategories = [
  { name: 'Books', items: 8, revenue: 240 },
  { name: 'Electronics', items: 3, revenue: 450 },
  { name: 'Fashion', items: 5, revenue: 120 },
];

export default function StudentSales() {
  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center gap-3 pt-2">
        <Link to="/profile" className="p-1"><ArrowLeft className="w-5 h-5" /></Link>
        <h1 className="text-xl font-bold">My Sales Dashboard</h1>
      </div>

      <div className="flex justify-end">
        <Button variant="outline" size="sm">
          <Download className="w-3 h-3 mr-1" /> Export Report
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <StatCard icon={DollarSign} label="Total Revenue" value="RM 1,610" />
        <StatCard icon={Package} label="Items Sold" value="16" />
      </div>

      <Card className="border-0 shadow-sm">
        <CardContent className="pt-4">
          <h3 className="text-sm font-semibold mb-3">Top Categories</h3>
          <div className="space-y-3">
            {topCategories.map((c, i) => (
              <div key={c.name} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded bg-primary/10 text-primary text-xs flex items-center justify-center font-bold">{i + 1}</span>
                  <span className="font-medium">{c.name}</span>
                </div>
                <span className="font-semibold">RM {c.revenue}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-0 shadow-sm">
        <CardContent className="pt-4">
          <h3 className="text-sm font-semibold mb-3">Sales Trend</h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Line type="monotone" dataKey="revenue" stroke="hsl(var(--primary))" strokeWidth={2} dot={{ r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      <FigureLabel number="5.6" title="Student Sales Dashboard" />
    </div>
  );
}