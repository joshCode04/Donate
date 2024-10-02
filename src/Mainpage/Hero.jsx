import Payment from "./pay/Payment";
function Hero() {
  return (
    <section className="h-screen text-center bg-gradient-to-r from-[#051e2e] via-[#093C5E] to-[#051e2e] montserrat pt-40">
      <div className="flex flex-col items-center justify-center ">
        {" "}
        {/* Optional background color */}
        {/* Small paragraph */}
        <p className="text-[#CE0E2D] text-sm font-bold mb-2">DONALD J. TRUMP</p>
        {/* Big paragraph/header */}
        <h1 className="text-5xl font-bold mb-4 text-white">
          Now accepting crypto
        </h1>
        {/* Smaller text */}
        <p className="text-white text-base max-w-2xl pb-4">
          Demonstrating President Trump’s success as a champion of American
          freedom and innovation, we proudly offer you a chance to contribute to
          the campaign with cryptocurrency. Saving our nation from Biden’s
          failures requires your support. As Biden piles regulations and red
          tape on all of us, President Trump stands ready to embrace new
          technologies that will Make America Great Again.
        </p>
        <div>
          <img src="./trades.png" alt="" />
        </div>
        <div className="flex gap-14 pt-10">
          <button className="py-4 px-14 rounded-full gap-2 text-red-500 bg-white flex">
            COINBASE{" "}
            <span>
              <img src="./coinbase.png" className="h-5 w-5" alt="" />
            </span>
          </button>
          <button className="py-4 px-14 rounded-full gap-2 bg-transparent hover:bg-white flex border-[1px] border-white">
            GEMINI
            <span>
              <img src="./gemini.png" className="h-5 w-5" alt="" />
            </span>
          </button>
          <button className="py-4 px-14 rounded-full gap-2 bg-transparent hover:bg-white flex border-[1px] border-white">
            ANEDOT
            <span>
              <img src="./anedot.png" className="h-5 w-5" alt="" />
            </span>
          </button>
        </div>
      </div>
      <Payment />
      <div className="bg-gradient-to-r from-[#093C5E] via-[#123A45] to-[#1F414D] text-white p-6 text-xs leading-6 montserrat">
        <p>
          By providing your phone number, you are consenting to receive calls
          and recurring SMS/MMS messages, including autodialed and automated
          calls and texts, to that number from each of the participating
          committees in Trump National Committee JFC, Inc. (TNC), a joint
          fundraising committee composed of and authorized by Donald J. Trump
          for President 2024, Inc. (DJTFP), the principal campaign committee of
          Donald J. Trump, and the Republican National Committee (RNC). Msg &
          data rates may apply. Terms & conditions/privacy policy apply.
          txtterms.co/88022-2
        </p>

        <p className="mt-4">
          Contributions or gifts to TNC are not tax deductible. All
          contributions are subject to the limits and prohibitions of the
          Federal Election Campaign Act. Contributions from corporations,
          foreign nationals (i.e., without “green cards”), federal government
          contractors, and other federally impermissible sources are strictly
          prohibited. Contributions made in the name of, or refunded by, any
          other person are unlawful.
        </p>

        <p className="mt-4">
          By contributing you understand and acknowledge that the recipient
          committees may use your contributed funds for any reason, as
          determined in their sole discretion, consistent with their obligations
          under federal election law. No statement contained in any solicitation
          should be reasonably understood or construed as a promise, earmark, or
          other designation to make any specific use of funds you contribute.
        </p>

        <p className="mt-4">
          Contributions to TNC are subject to federal contribution limits and
          source prohibitions. Contributions from corporations, foreign
          nationals (i.e., without “green cards”), federal government
          contractors, and other federally impermissible sources are prohibited.
          Contributions made in the name of, or refunded by, any other person
          are prohibited by law.
        </p>

        <p className="mt-4">
          Contributions to TNC from individuals (multicandidate PACs) will be
          allocated according to the following formula:
        </p>

        <ol className="list-decimal pl-5 mt-2">
          <li>
            90% to DJTFP, which will designate the funds first to its general
            election account and then to its recount account, up to a maximum of
            $3,300 ($5,000) per election; and
          </li>
          <li>
            10% to the RNC, up to a maximum of $413,000 ($150,000) per year.
          </li>
        </ol>

        <p className="mt-4">
          Any contribution exceeding the legal amount that may be contributed to
          any committee will be distributed to the remaining participating
          committee to the extent permitted by federal law and according to the
          allocation method set forth above. Any contribution that would cause a
          contributor to exceed any applicable federal contribution limit or
          otherwise not be permissible under FECA and FEC regulations will be
          refunded to the contributor. Contributors may specify a different
          allocation than the one set forth above.
        </p>

        <p className="mt-4">
          Federal law requires us to use our best efforts to collect and report
          the name, mailing address, occupation, and name of employer of each
          individual whose aggregate contributions exceed $200 in an election
          cycle or calendar year, as applicable.
        </p>
      </div>
      <div className="border-[1px] border-white bg-gradient-to-r from-[#093C5E] via-[#123A45] to-[#1F414D] text-white p-2 text-xs leading-6 montserrat mx-4">
        <p>
          Paid for by Trump National Committee JFC, a joint fundraising
          committee of Donald J. Trump for President 2024, Inc. and the
          Republican National Committee.
        </p>
      </div>
    </section>
  );
}

export default Hero;
