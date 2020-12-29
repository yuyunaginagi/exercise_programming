import {useState} from "react";

export function CountCustomerNumber(): [
  number,
  () => void,
  () => void
] {
  const [reserveNumber, setReserveNumber] = useState<number>(0)

  const handleIncreaseReserveNumber = () => {
    setReserveNumber(reserveNumber + 1)
  }

  const handleDecreaseReserveNumber = () => {
    if (reserveNumber > 0){
      setReserveNumber(reserveNumber - 1)
    }
  }

  return [reserveNumber, handleIncreaseReserveNumber, handleDecreaseReserveNumber];
}