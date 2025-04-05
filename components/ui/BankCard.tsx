import { formatAmount } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";


const BankCard = ({
  account,
  userName,
  showBalance = true,
}: CreditCardProps) => {
  return (
    <div className="flex flex-col">
      <Link href="/" className="bank-card bg-blue-600">
        <div className="bank-card_content bg-blue-500">
          <div>
            <h1 className="text-14 font-semibold text-white">
              { userName}
            </h1>
            <p className="font-ibm-plex-serif text-white">
              {formatAmount(account.currentBalance)}
            </p>
          </div>

          <article className="flex flex-col gap-2">
            <div className="flex justify-between">
              <h1 className="text-12 text-white">{userName}</h1>
              <h2 className="text-12 font-semibold text-white">
                &#9679;&#9679;/&#9679;&#9679;
              </h2>
            </div>
            <p className="text-14 font-semibold tracking-[1.1px] text-white">
              &#9679;&#9679;&#9679;&#9679; &#9679;&#9679;&#9679;&#9679;
              &#9679;&#9679;&#9679;&#9679;
              <span className="text-16 "> {1234}</span>
            </p>
          </article>
        </div>

        <div className="bank-card_icon">
          <Image
            src="/icons/Paypass.svg"
            width={20}
            height={24}
            alt="pay"
            className="ml-4"
          />
          <Image
            src="/icons/mastercard.svg"
            width={45}
            height={32}
            alt="mastercard"
            className="ml-8"
          />
        </div>
      </Link>
    </div>
  );
};

export default BankCard;
