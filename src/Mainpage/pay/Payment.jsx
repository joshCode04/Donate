import { useState } from "react";
import Select from "react-select";

function Payment() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState({
    value: "Bitcoin",
    label: (
      <div className="flex items-center">
        <img src="/bitcoin.png" alt="Bitcoin Logo" className="w-6 h-6 mr-2" />
        Bitcoin
      </div>
    ),
  });

  const [copied, setCopied] = useState("");

  const addresses = {
    Bitcoin: "bc1q26xdk0merragvcuuww8ghafes8tqqnxh8mg0d9",
    Ethereum: "0xB1DE3D7F74aa03F3d936556d0e3538a8C19A1de3",
    USDT: "THLMrfWfy25w9iNdJ6n8hoRsJBK6dEAU63",
  };

  const handleCopyAddress = (crypto) => {
    const address = addresses[crypto];
    if (address) {
      navigator.clipboard.writeText(address);
      setCopied(crypto);
      setTimeout(() => setCopied(""), 3000);
    }
  };

  const cryptoOptions = [
    {
      value: "Bitcoin",
      label: (
        <div className="flex items-center">
          <img src="/bitcoin.png" alt="Bitcoin Logo" className="w-6 h-6 mr-2" />
          Bitcoin
        </div>
      ),
    },
    {
      value: "Ethereum",
      label: (
        <div className="flex items-center">
          <img
            src="/ethereum.png"
            alt="Ethereum Logo"
            className="w-6 h-6 mr-2"
          />
          Ethereum
        </div>
      ),
    },
    {
      value: "USDT", // Changed from "Litecoin" to "USDT"
      label: (
        <div className="flex items-center">
          <img src="/USDT.png" alt="USDT Logo" className="w-6 h-6 mr-2" />
          USDT
        </div>
      ),
    },
  ];

  return (
    <div className="bg-[#173344] flex max-md:flex-col gap-[-30px]">
      {/* Trump Image on the left */}
      <div className="flex-shrink-0">
        <img
          src="./donald.png"
          className="ml-[-135px] max-md:ml-0 h-auto w-[64em]"
          alt="Donald Trump"
        />
      </div>

      {/* Payment Section centered */}
      <div className="flex-col w-full">
        <p className="text-2xl text-white montserrat pr-20">Start donating.</p>
        <div className="bg-white rounded-lg flex-1 max-w-lg mx-4">
          <div className="px-10 py-10 max-[900px]:py-5 max-[900px]:px-5 max-sm:px-4">
            <div className="text-[#005AFF] flex gap-2">
              <span className="text-3xl">
                <ion-icon name="card"></ion-icon>
              </span>
              <p className="text-xl font-normal">Payment Options</p>
            </div>
            <p className="text-[#CBB2B9] text-xs">
              Choose your preferred payment method now
            </p>
          </div>
          <div className="w-full h-[2px] bg-[#B6C3D2]" />
          <Select
            id="payment-method"
            options={cryptoOptions}
            value={selectedPaymentMethod}
            onChange={setSelectedPaymentMethod}
            className="border rounded-md p-2 m-4 text-black"
            components={{ IndicatorSeparator: () => null }}
          />
          {selectedPaymentMethod && (
            <div className="relative p-4">
              <p className="mb-2 text-black text-start pl-2 text-base">
                Send {selectedPaymentMethod.value} to the following address:
              </p>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  className="border rounded-md p-2 w-full z-0 text-black"
                  value={addresses[selectedPaymentMethod.value]}
                  readOnly
                />
                <button
                  onClick={() => handleCopyAddress(selectedPaymentMethod.value)}
                  className="bg-gray-300 text-black px-3 py-2 rounded-md"
                >
                  Copy
                </button>
              </div>
              <div className="flex gap-4 justify-center mt-5">
                <div
                  onClick={() => handleSelect("paypal")}
                  className={`bg-[#F8F9FC] p-3 cursor-pointer ${
                    selectedOption === "paypal"
                      ? "border-2 border-blue-500"
                      : ""
                  }`}
                >
                  <img src="/paypal.png" alt="PayPal" className="w-16 h-7" />
                </div>
                <div
                  onClick={() => handleSelect("visa")}
                  className={`bg-[#F8F9FC] p-3 cursor-pointer ${
                    selectedOption === "visa" ? "border-2 border-blue-500" : ""
                  }`}
                >
                  <img src="/visa.png" alt="VISA" className="w-16 h-7" />
                </div>
                <div
                  onClick={() => handleSelect("gpay")}
                  className={`bg-[#F8F9FC] p-3 cursor-pointer ${
                    selectedOption === "gpay" ? "border-2 border-blue-500" : ""
                  }`}
                >
                  <img src="/Gpay.jpg" alt="Google Pay" className="w-16 h-7" />
                </div>
              </div>
              {copied === selectedPaymentMethod.value && (
                <div className="absolute top-full mt-2 p-2 bg-green-500 text-white rounded-md">
                  {selectedPaymentMethod.value} address copied to clipboard!
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Payment;
