"use client";
import { useEffect, useState } from "react";

const BlogDate = ({ createdAt }) => {
  const [relativeTime, setRelativeTime] = useState("");

  useEffect(() => {
    // Funkcija za izračun relativnog vremena
    const getRelativeTime = () => {
      const now = new Date();
      const then = new Date(createdAt);
      const diffInSeconds = Math.floor((now - then) / 1000); // Razlika u sekundama
      const rtf = new Intl.RelativeTimeFormat("en", {
        numeric: "auto", // Koristi "before" kad je moguće
      });

      // Razlikuj u vremenskim jedinicama
      if (diffInSeconds < 60) {
        // Ako je manja od 60 sekundi
        setRelativeTime(rtf.format(-diffInSeconds, "second"));
      } else if (diffInSeconds < 3600) {
        // Ako je manje od 1 sata (3600 sekundi)
        const diffInMinutes = Math.floor(diffInSeconds / 60);
        setRelativeTime(rtf.format(-diffInMinutes, "minute"));
      } else if (diffInSeconds < 86400) {
        // Ako je manje od 1 dana (86400 sekundi)
        const diffInHours = Math.floor(diffInSeconds / 3600);
        setRelativeTime(rtf.format(-diffInHours, "hour"));
      } else if (diffInSeconds < 2592000) {
        // Ako je manje od 1 mjeseca (2592000 sekundi)
        const diffInDays = Math.floor(diffInSeconds / 86400);
        setRelativeTime(rtf.format(-diffInDays, "day"));
      } else if (diffInSeconds < 31536000) {
        // Ako je manje od 1 godine (31536000 sekundi)
        const diffInMonths = Math.floor(diffInSeconds / 2592000);
        setRelativeTime(rtf.format(-diffInMonths, "month"));
      } else {
        // Ako je više od 1 godine
        const diffInYears = Math.floor(diffInSeconds / 31536000);
        setRelativeTime(rtf.format(-diffInYears, "year"));
      }
    };

    // Pozovi funkciju za izračun relativnog vremena odmah
    getRelativeTime();

    // Ažuriraj svaki put kad prođe 1 sekunda (ako želimo dinamički ažurirati relativno vrijeme)
    const interval = setInterval(getRelativeTime, 1000);

    // Očisti interval kad komponenta bude unmountana
    return () => clearInterval(interval);
  }, [createdAt]);

  return (
    <p className="text-sm text-slate-700 font-semibold text-start mt-4 lowercase">
      {relativeTime}
    </p>
  );
};

export default BlogDate;
