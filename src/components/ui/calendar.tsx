
import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker } from "react-day-picker"
import { ptBR } from 'date-fns/locale'
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("w-full p-4 bg-white rounded-xl", className)}
      classNames={{
        months: "flex w-full",
        month: "w-full space-y-4",
        caption: "flex justify-center relative items-center px-8 pb-4",
        caption_label: "text-lg font-semibold text-[#0F2D52]",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-10 w-10 bg-transparent p-0 opacity-70 hover:opacity-100 hover:bg-blue-50 transition-all duration-200"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-2",
        head_row: "flex w-full",
        head_cell: "text-[#0F2D52] rounded-md w-full font-medium text-[0.8rem] uppercase tracking-wider text-center",
        row: "flex w-full mt-1",
        cell: cn(
          "flex-1 relative p-0 text-center text-sm focus-within:relative focus-within:z-20 transition-colors duration-200",
          props.mode === "range"
            ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md"
            : "[&:has([aria-selected])]:rounded-md"
        ),
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-10 w-full p-0 font-normal aria-selected:opacity-100 hover:bg-blue-50 focus:bg-blue-50 transition-all duration-200"
        ),
        day_range_start: "day-range-start",
        day_range_end: "day-range-end",
        day_selected:
          "bg-[#10B981] text-white hover:bg-[#10B981]/90 hover:text-white focus:bg-[#10B981] focus:text-white",
        day_today: "border-2 border-[#0F2D52] text-[#0F2D52] font-semibold",
        day_outside: "text-slate-400 opacity-50 aria-selected:bg-slate-100/50 hover:bg-transparent",
        day_disabled: "text-slate-400 opacity-50 hover:bg-transparent cursor-not-allowed",
        day_range_middle:
          "aria-selected:bg-slate-100 aria-selected:text-slate-900",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => (
          <ChevronLeft className="h-6 w-6 text-[#0F2D52]" />
        ),
        IconRight: ({ ...props }) => (
          <ChevronRight className="h-6 w-6 text-[#0F2D52]" />
        ),
      }}
      locale={ptBR}
      {...props}
    />
  )
}
Calendar.displayName = "Calendar"

export { Calendar }
