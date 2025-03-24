
import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { FileText, Calendar, User, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

type BookingReceiptProps = {
  bookingData: {
    service: string;
    date?: Date;
    time: string;
    therapist: string;
    name: string;
    email: string;
    price: string;
    bookingNumber: string;
  };
};

const BookingReceipt = ({ bookingData }: BookingReceiptProps) => {
  return (
    <Card className="w-full max-w-md mx-auto border-wellness-300 shadow-md">
      <CardHeader className="bg-wellness-50 border-b border-wellness-200 p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileText className="h-6 w-6 text-wellness-600" />
            <h3 className="text-xl font-semibold text-wellness-800">Booking Receipt</h3>
          </div>
          <span className="text-sm font-medium text-wellness-600">#{bookingData.bookingNumber}</span>
        </div>
      </CardHeader>
      
      <CardContent className="p-6 space-y-5">
        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="text-gray-600 font-medium">Service</span>
            <span className="font-semibold">
              {bookingData.service === "basic" && "Basic Therapy"}
              {bookingData.service === "vr" && "VR Therapy"}
              {bookingData.service === "premium" && "Premium Therapy"}
            </span>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-wellness-500" />
              <span className="text-gray-600 font-medium">Date</span>
            </div>
            <span className="font-semibold">
              {bookingData.date?.toLocaleDateString('en-US', {
                weekday: 'short',
                year: 'numeric',
                month: 'short',
                day: 'numeric'
              })}
            </span>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-wellness-500" />
              <span className="text-gray-600 font-medium">Time</span>
            </div>
            <span className="font-semibold">{bookingData.time}</span>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4 text-wellness-500" />
              <span className="text-gray-600 font-medium">Therapist</span>
            </div>
            <span className="font-semibold">{bookingData.therapist}</span>
          </div>
          
          <Separator className="my-2" />
          
          <div className="flex justify-between font-medium">
            <span className="text-gray-600">Client</span>
            <span>{bookingData.name}</span>
          </div>
          
          <div className="flex justify-between font-medium">
            <span className="text-gray-600">Email</span>
            <span className="text-gray-800">{bookingData.email}</span>
          </div>
        </div>
        
        <Separator className="my-2" />
        
        <div className="flex justify-between items-center pt-3">
          <span className="text-lg font-semibold text-gray-700">Total</span>
          <span className="text-xl font-bold text-wellness-700">{bookingData.price}</span>
        </div>
      </CardContent>
      
      <CardFooter className="bg-gray-50 p-4 flex justify-center gap-4 border-t border-gray-200">
        <Button variant="outline" asChild className="w-1/2">
          <Link to="/">Return Home</Link>
        </Button>
        <Button className="w-1/2 bg-wellness-600 hover:bg-wellness-700" onClick={() => window.print()}>
          Print Receipt
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BookingReceipt;
