import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function CustomSelect() {
  return (
    <Select>
      <SelectTrigger className="w-[130px] h-7 bg-inherit border-none border-0 focus:ring-0 focus:ring-ring focus:ring-offset-0 focus:outline-none">
        <SelectValue placeholder="Ordernar por:" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Ordenar por:</SelectLabel>
          <SelectItem value="A-Z">A-Z</SelectItem>
          <SelectItem value="Z-A">Z-A</SelectItem>
          <SelectItem value="reciente">Mas reciente</SelectItem>
          <SelectItem value="antiguo">Mas antiguo</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
