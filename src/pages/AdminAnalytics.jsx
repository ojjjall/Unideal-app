import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ArrowLeft, Users, Activity, Clock, BarChart3, Download, Filter, TrendingUp, DollarSign, Package, Star } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import StatCard from '@/components/shared/StatCard';
import FigureLabel from '@/components/shared/FigureLabel';

const loginData = [
  { month: 'Oct', sessions: 120 },
  { month: 'Nov', sessions: 180 },
  { month: 'Dec', sessions: 150 },
  { month: 'Jan', sessions: 220 },
  { month: 'Feb', sessions: 280 },
  { month: 'Mar', sessions: 310 },
];

const salesData = [
  { month: 'Oct', revenue: 2400 },
  { month: 'Nov', revenue: 3100 },
  { month: 'Dec', revenue: 2800 },
  { month: 'Jan', revenue: 4200 },
  { month: 'Feb', revenue: 3800 },
  { month: 'Mar', revenue: 5100 },
];

const topCategories = [
  { name: 'Books', items: 156, revenue: 3420 },
  { name: 'Electronics', items: 89, revenue: 8950 },
  { name: 'Fashion', items: 67, revenue: 1890 },
  { name: 'Furniture', items: 34, revenue: 2100 },
];

const topSellers = [
  { name: 'Ahmad Haziq', items: 23, revenue: 1250 },
  { name: 'Siti Aminah', items: 18, revenue: 980 },
  { name: 'Muhammad Ali', items: 15, revenue: 870 },
];

export default function AdminAnalytics() {
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center gap-3 pt-2">
        <Link to="/admin" className="p-1"><ArrowLeft className="w-5 h-5" /></Link>
        <h1 className="text-xl font-bold">Analytics Dashboard</h1>
      </div>

      <Tabs defaultValue="activity">
        <TabsList className="w-full">
          <TabsTrigger value="activity" className="flex-1">User Activity</TabsTrigger>
          <TabsTrigger value="sales" className="flex-1">Sales</TabsTrigger>
        </TabsList>

        {/* User Activity Dashboard - Figure 5.2 */}
        <TabsContent value="activity" className="space-y-4 mt-4">
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={() => setShowFilter(true)}>
              <Filter className="w-3 h-3 mr-1" /> Filter
            </Button>
            <Button variant="outline" size="sm">
              <Download className="w-3 h-3 mr-1" /> Export PDF
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <StatCard icon={Users} label="Total Users" value="162" />
            <StatCard icon={Activity} label="Active Users" value="89" color="text-green-600" />
            <StatCard icon={Clock} label="Avg Session" value="12 min" />
            <StatCard icon={BarChart3} label="Login Sessions" value="310" />
          </div>

          <Card className="border-0 shadow-sm">
            <CardContent className="pt-4">
              <h3 className="text-sm font-semibold mb-3">Login Trend (Last 6 Months)</h3>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={loginData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Tooltip />
                  <Line type="monotone" dataKey="sessions" stroke="hsl(var(--primary))" strokeWidth={2} dot={{ r: 4 }} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          <FigureLabel number="5.2" title="User Activity Dashboard" />
        </TabsContent>

        {/* Sales Dashboard - Figure 5.5 */}
        <TabsContent value="sales" className="space-y-4 mt-4">
          <div className="flex justify-end">
            <Button variant="outline" size="sm">
              <Download className="w-3 h-3 mr-1" /> Export Report
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <StatCard icon={DollarSign} label="Total Revenue" value="RM 21,360" />
            <StatCard icon={Package} label="Items Sold" value="346" />
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
                    <div className="text-right">
                      <span className="text-muted-foreground">{c.items} items</span>
                      <span className="ml-2 font-semibold">RM {c.revenue.toLocaleString()}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm">
            <CardContent className="pt-4">
              <h3 className="text-sm font-semibold mb-3">Global Sales Trend</h3>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={salesData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Tooltip />
                  <Bar dataKey="revenue" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm">
            <CardContent className="pt-4">
              <h3 className="text-sm font-semibold mb-3">Top Sellers</h3>
              <div className="space-y-3">
                {topSellers.map((s, i) => (
                  <div key={s.name} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <Star className={`w-4 h-4 ${i === 0 ? 'text-amber-500' : 'text-muted-foreground'}`} />
                      <span className="font-medium">{s.name}</span>
                    </div>
                    <span className="font-semibold">RM {s.revenue.toLocaleString()}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <FigureLabel number="5.5" title="Admin Sales Dashboard" />
        </TabsContent>
      </Tabs>

      {/* Filter Modal - Figure 5.3 */}
      <Dialog open={showFilter} onOpenChange={setShowFilter}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Filter Activity</DialogTitle>
          </DialogHeader>
          <div className="space-y-2">
            {['Today', 'This Month', 'All Time'].map(f => (
              <Button key={f} variant="outline" className="w-full justify-start" onClick={() => setShowFilter(false)}>
                {f}
              </Button>
            ))}
            <Button variant="ghost" className="w-full text-muted-foreground" onClick={() => setShowFilter(false)}>
              Reset
            </Button>
          </div>
        </DialogContent>
      </Dialog>
      <FigureLabel number="5.3" title="Filter Activity Modal" />
    </div>
  );
}