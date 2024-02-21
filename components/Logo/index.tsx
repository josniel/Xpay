import Xpay from "@/components/UI/Icons/Xpay"
import Link from "next/link"

const LogoHeader = () => {
  return (
    <Link href={"/"}>
      <div className="pb-0.5 max-md:hidden text-navy-blue-900">
        <Xpay width={180} height={46} />
      </div>
      <div className="md:hidden text-navy-blue-900">
        <Xpay width={120} height={31} />
      </div>
    </Link>
  )
}

const LogoFooter = () => {
  return (
    <Link href={"/"}>
      <div className="max-md:hidden text-navy-blue-900">
        <Xpay width={180} height={46} />
      </div>
      <div className="md:hidden text-navy-blue-900">
        <Xpay width={140} height={36} />
      </div>
    </Link>
  )
}

export { LogoHeader, LogoFooter }
