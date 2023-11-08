import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import myIcon from "../Assets/Cart.svg";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className=" bg-blue-200 h-24 p-4 px-14 pt-6  fixed w-full top-0 z-10  ">
      <nav className="flex gap-36 items-center">
        <div>
          <svg
            width="150"
            height="30"
            viewBox="0 0 150 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M46 1.5C46 7.46737 44 13.5 41 17.4099C37 21.5 37 24 25.5222 24C14.0444 24 14 22.1151 9.61232 17.4099C5.22463 12.7047 5 7.96737 5 2H9C9 10.5 12.4388 14.5834 12.4388 14.5834C12.4388 14.5834 15.5222 20.0027 25.5222 20.0027C35.5222 20.0027 38 14.5834 38 14.5834C38 14.5834 41.4321 8.5 41.4321 1.5H46Z"
              fill="#010A5A"
            />
            <path
              d="M41.46 9.52725C41.866 10.8567 42.6899 12.0199 43.8095 12.844C44.929 13.6681 46.2845 14.1093 47.6746 14.1019C49.0647 14.0945 50.4154 13.639 51.5262 12.8031C52.6369 11.9672 53.4485 10.7953 53.8404 9.46159C54.2323 8.12781 54.1836 6.70321 53.7016 5.39929C53.2196 4.09537 52.33 2.98164 51.1647 2.22345C49.9995 1.46527 48.6209 1.10305 47.2335 1.19056C45.8461 1.27808 44.5239 1.81067 43.4632 2.70927L45.615 5.24918C46.1293 4.81347 46.7704 4.55523 47.4431 4.51279C48.1158 4.47037 48.7842 4.646 49.3492 5.01362C49.9142 5.38124 50.3456 5.92125 50.5793 6.55349C50.813 7.18572 50.8366 7.87646 50.6466 8.52317C50.4565 9.16988 50.063 9.73808 49.5245 10.1433C48.9859 10.5487 48.331 10.7695 47.657 10.7731C46.9829 10.7767 46.3257 10.5628 45.7829 10.1632C45.24 9.76365 44.8405 9.19967 44.6437 8.55501L41.46 9.52725Z"
              fill="#010A5A"
            />
            <path
              d="M39 1.59495C39 5.94584 37.525 10.1185 34.8995 13.1951C32.274 16.2716 28.713 18 25 18C21.287 18 17.726 16.2716 15.1005 13.1951C12.475 10.1185 11 5.94584 11 1.59495C11 1.59495 19 5.18358 25 1.59495C31 -1.99369 39 1.59495 39 1.59495Z"
              fill="#EE722E"
            />
            <path
              d="M43.7553 27H7.24468C6.55726 27 6 27.6716 6 28.5C6 29.3284 6.55726 30 7.24468 30H43.7553C44.4427 30 45 29.3284 45 28.5C45 27.6716 44.4427 27 43.7553 27Z"
              fill="#010A5A"
            />
            <path
              d="M67.0838 21.3049C65.6391 21.3049 64.3826 21.0425 63.3143 20.5175C62.2459 19.9804 61.4265 19.2235 60.8559 18.2468C60.2853 17.2702 60 16.1348 60 14.8408C60 13.0462 60.3339 11.453 61.0016 10.0613C61.6814 8.66959 62.598 7.59528 63.7513 6.83838C64.9047 6.06927 66.1855 5.68471 67.5937 5.68471C68.9049 5.68471 69.9004 6.02654 70.5802 6.71019C71.2601 7.38163 71.6 8.27282 71.6 9.38376C71.6 10.1285 71.4665 10.7266 71.1994 11.1783C70.9444 11.63 70.5742 11.8559 70.0886 11.8559C69.7486 11.8559 69.4815 11.7765 69.2873 11.6178C69.0931 11.4591 68.9959 11.2272 68.9959 10.922C68.9959 10.8121 69.0202 10.6107 69.0688 10.3177C69.1416 9.95143 69.178 9.65844 69.178 9.43869C69.178 8.32776 68.5892 7.77229 67.4116 7.77229C66.6104 7.77229 65.8455 8.03477 65.1171 8.55971C64.3887 9.08466 63.7999 9.85987 63.3507 10.8853C62.9015 11.8986 62.6769 13.1072 62.6769 14.5111C62.6769 15.9761 63.0836 17.1115 63.897 17.9172C64.7104 18.7107 65.9123 19.1075 67.5027 19.1075C68.2918 19.1075 69.087 19.0098 69.8882 18.8145C70.7016 18.607 71.6 18.2956 72.5834 17.8806C72.7655 17.8073 72.9172 17.7707 73.0386 17.7707C73.2329 17.7707 73.3786 17.8439 73.4757 17.9904C73.5728 18.1369 73.6214 18.3262 73.6214 18.5581C73.6214 19.3028 73.2207 19.8522 72.4195 20.2062C71.5575 20.5847 70.6591 20.8654 69.7243 21.0486C68.8017 21.2195 67.9215 21.3049 67.0838 21.3049ZM74.4326 21.3049C73.6799 21.3049 73.0789 21.0303 72.6298 20.4809C72.1806 19.9315 71.956 19.2113 71.956 18.3201C71.956 17.3434 72.1806 16.4217 72.6298 15.5549C73.0789 14.676 73.6738 13.974 74.4144 13.449C75.1671 12.9119 75.9623 12.6433 76.8 12.6433C77.0671 12.6433 77.2431 12.6982 77.3281 12.8081C77.4252 12.9058 77.5041 13.0889 77.5648 13.3575C77.8198 13.3087 78.0869 13.2842 78.3661 13.2842C78.961 13.2842 79.2584 13.4979 79.2584 13.9252C79.2584 14.1815 79.1673 14.7919 78.9852 15.7564C78.706 17.1603 78.5664 18.1369 78.5664 18.6863C78.5664 18.8694 78.6089 19.0159 78.6939 19.1258C78.791 19.2357 78.9124 19.2906 79.0581 19.2906C79.2887 19.2906 79.568 19.1441 79.8958 18.8511C80.2235 18.5459 80.6667 18.0576 81.2251 17.3861C81.3708 17.2152 81.5347 17.1298 81.7168 17.1298C81.8746 17.1298 81.996 17.203 82.081 17.3495C82.1781 17.496 82.2267 17.6974 82.2267 17.9538C82.2267 18.4421 82.1113 18.8206 81.8807 19.0892C81.3829 19.7118 80.8548 20.2367 80.2964 20.664C79.7379 21.0913 79.1977 21.3049 78.6757 21.3049C78.275 21.3049 77.9048 21.1706 77.5648 20.9021C77.237 20.6213 76.9882 20.2428 76.8182 19.7667C76.1869 20.7922 75.3917 21.3049 74.4326 21.3049ZM75.0882 19.4554C75.3553 19.4554 75.6102 19.2967 75.853 18.9793C76.0959 18.6619 76.2719 18.2407 76.3812 17.7158L77.0549 14.3463C76.545 14.3585 76.0716 14.5539 75.6345 14.9323C75.2096 15.2986 74.8697 15.7869 74.6147 16.3973C74.3598 17.0077 74.2323 17.6547 74.2323 18.3384C74.2323 18.7168 74.3052 18.9976 74.4508 19.1807C74.6087 19.3639 74.8211 19.4554 75.0882 19.4554ZM87.8347 16.086C88.1746 16.086 88.3446 16.3424 88.3446 16.8551C88.3446 17.8195 87.5919 18.3017 86.0865 18.3017C85.7952 18.3017 85.3763 18.2468 84.83 18.1369C84.9878 18.8938 85.1153 19.7362 85.2124 20.664C85.3217 21.5796 85.3763 22.3365 85.3763 22.9347C85.3763 24.2532 85.1639 25.2604 84.739 25.9562C84.314 26.6521 83.7556 27 83.0636 27C82.1895 27 81.5643 26.3774 81.1879 25.1322C80.8237 23.8869 80.6416 22.0069 80.6416 19.492C80.6416 17.1481 80.8905 14.7736 81.3882 12.3686C81.8981 9.95143 82.5901 7.95541 83.4642 6.38057C84.3505 4.79352 85.3217 4 86.3779 4C86.9485 4 87.3916 4.25637 87.7072 4.7691C88.035 5.28184 88.1989 5.9716 88.1989 6.83838C88.1989 9.70727 86.4932 12.8325 83.0818 16.2142C82.9604 17.4106 82.8997 18.4605 82.8997 19.3638C82.8997 20.6213 82.9422 21.9092 83.0272 23.2277C83.1122 24.5584 83.2518 25.2237 83.446 25.2237C83.8102 25.2237 83.9923 24.5889 83.9923 23.3193C83.9923 22.367 83.9256 21.4453 83.792 20.5541C83.6706 19.663 83.5007 18.7229 83.2821 17.7341C83.27 17.5754 83.3185 17.3739 83.4278 17.1298C83.5492 16.8856 83.6949 16.672 83.8649 16.4889C84.0348 16.3057 84.1866 16.2142 84.3201 16.2142C84.5629 16.2142 84.8543 16.2264 85.1942 16.2508C85.3035 16.263 85.431 16.2691 85.5766 16.2691C86.0622 16.2691 86.6025 16.2264 87.1974 16.1409C87.2945 16.1287 87.3977 16.1165 87.5069 16.1043C87.6162 16.0921 87.7255 16.086 87.8347 16.086ZM85.9955 5.8129C85.7769 5.8129 85.5038 6.18524 85.176 6.92993C84.8604 7.67463 84.5447 8.66348 84.2291 9.89649C83.9134 11.1173 83.6403 12.4114 83.4096 13.7787C84.3808 12.6677 85.1274 11.5141 85.6495 10.3177C86.1715 9.10908 86.4386 7.97983 86.4507 6.92993C86.4507 6.18524 86.299 5.8129 85.9955 5.8129ZM93.4901 17.6791C93.6479 17.6791 93.7693 17.7524 93.8543 17.8989C93.9514 18.0454 94 18.2468 94 18.5032C94 18.9427 93.8968 19.3211 93.6904 19.6385C93.3505 20.1635 92.9013 20.5725 92.3429 20.8654C91.7965 21.1584 91.141 21.3049 90.3761 21.3049C89.2107 21.3049 88.3062 20.957 87.6628 20.2611C87.0194 19.5531 86.6976 18.6009 86.6976 17.4045C86.6976 16.5621 86.8737 15.7808 87.2257 15.0605C87.5778 14.328 88.0634 13.7481 88.6826 13.3209C89.3139 12.8936 90.0241 12.6799 90.8132 12.6799C91.5173 12.6799 92.0818 12.8936 92.5067 13.3209C92.9317 13.7359 93.1441 14.3036 93.1441 15.0239C93.1441 15.8662 92.8406 16.5926 92.2336 17.203C91.6387 17.8012 90.6189 18.2773 89.1742 18.6314C89.4656 19.1929 89.9573 19.4737 90.6493 19.4737C91.147 19.4737 91.5537 19.3577 91.8694 19.1258C92.1972 18.8938 92.5735 18.5032 92.9984 17.9538C93.1441 17.7707 93.308 17.6791 93.4901 17.6791ZM90.5036 14.4745C90.0544 14.4745 89.672 14.737 89.3564 15.2619C89.0528 15.7869 88.9011 16.4217 88.9011 17.1664V17.203C89.6174 17.0321 90.1819 16.7757 90.5947 16.4339C91.0074 16.0921 91.2138 15.6953 91.2138 15.2436C91.2138 15.0117 91.147 14.8286 91.0135 14.6943C90.8921 14.5478 90.7221 14.4745 90.5036 14.4745Z"
              fill="#EE722E"
            />
            <path
              d="M105.365 21C103.742 21 102.442 20.6973 101.465 20.0919C100.488 19.4745 100 18.5361 100 17.277C100 16.611 100.116 16.1025 100.348 15.7514C100.58 15.4003 100.922 15.2247 101.373 15.2247C101.703 15.2247 101.972 15.3095 102.179 15.479C102.387 15.6485 102.49 15.8664 102.49 16.1328C102.49 16.375 102.472 16.5868 102.436 16.7684C102.436 16.8169 102.423 16.9016 102.399 17.0227C102.387 17.1438 102.381 17.2709 102.381 17.4041C102.381 17.9489 102.655 18.3545 103.205 18.6209C103.766 18.8872 104.548 19.0204 105.549 19.0204C106.586 19.0204 107.398 18.8388 107.984 18.4756C108.57 18.1003 108.863 17.5796 108.863 16.9137C108.863 16.5021 108.729 16.151 108.46 15.8604C108.192 15.5577 107.856 15.3095 107.453 15.1158C107.05 14.91 106.483 14.6617 105.75 14.3712C104.81 14.0079 104.041 13.6629 103.443 13.336C102.857 13.0091 102.35 12.5672 101.923 12.0102C101.508 11.4412 101.3 10.7389 101.3 9.90352C101.3 9.03178 101.532 8.25691 101.996 7.57889C102.472 6.90087 103.15 6.3742 104.029 5.99886C104.92 5.62353 105.964 5.43587 107.16 5.43587C108.051 5.43587 108.869 5.56905 109.614 5.83542C110.359 6.08967 110.951 6.48316 111.39 7.01589C111.842 7.54862 112.068 8.20242 112.068 8.9773C112.068 9.74007 111.952 10.3152 111.72 10.7026C111.488 11.09 111.146 11.2838 110.694 11.2838C110.377 11.2838 110.108 11.1869 109.889 10.9932C109.681 10.7995 109.577 10.5694 109.577 10.3031C109.577 10.073 109.596 9.86115 109.632 9.66743C109.669 9.3042 109.687 9.07416 109.687 8.9773C109.687 8.46879 109.437 8.08135 108.936 7.81498C108.436 7.54862 107.813 7.41544 107.069 7.41544C106.019 7.41544 105.213 7.60916 104.651 7.9966C104.102 8.37193 103.827 8.90466 103.827 9.59478C103.827 10.0549 103.968 10.4484 104.248 10.7753C104.541 11.1022 104.902 11.3746 105.329 11.5925C105.756 11.8104 106.354 12.0708 107.123 12.3734C108.051 12.7488 108.796 13.0878 109.358 13.3905C109.919 13.6932 110.395 14.1048 110.786 14.6254C111.189 15.146 111.39 15.7877 111.39 16.5505C111.39 17.9792 110.841 19.081 109.742 19.8558C108.656 20.6186 107.197 21 105.365 21ZM120.942 16.8048C121.1 16.8048 121.223 16.8774 121.308 17.0227C121.406 17.168 121.455 17.3678 121.455 17.622C121.455 18.1063 121.339 18.4817 121.107 18.748C120.582 19.3897 120.008 19.9164 119.385 20.328C118.763 20.7397 118.048 20.9455 117.243 20.9455C114.752 20.9455 113.507 19.2081 113.507 15.7333C113.507 15.2005 113.525 14.6617 113.562 14.1169H112.848C112.481 14.1169 112.231 14.0503 112.097 13.9171C111.975 13.784 111.914 13.5721 111.914 13.2815C111.914 12.6035 112.188 12.2645 112.738 12.2645H113.782C113.989 10.9327 114.307 9.71585 114.734 8.61407C115.161 7.5123 115.674 6.63451 116.272 5.98071C116.883 5.32691 117.536 5 118.232 5C118.744 5 119.147 5.22399 119.44 5.67196C119.733 6.11994 119.88 6.68294 119.88 7.36095C119.88 9.23761 119.086 10.8721 117.499 12.2645H119.55C119.745 12.2645 119.886 12.3069 119.971 12.3916C120.057 12.4764 120.099 12.6338 120.099 12.8638C120.099 13.6992 119.41 14.1169 118.03 14.1169H115.796C115.772 14.7223 115.759 15.1945 115.759 15.5335C115.759 16.7927 115.906 17.6765 116.199 18.185C116.504 18.6935 116.98 18.9478 117.627 18.9478C118.152 18.9478 118.616 18.7904 119.019 18.4756C119.422 18.1608 119.898 17.6886 120.447 17.059C120.594 16.8895 120.759 16.8048 120.942 16.8048ZM117.737 6.74347C117.554 6.74347 117.346 6.97352 117.115 7.4336C116.895 7.88158 116.681 8.51116 116.474 9.32236C116.278 10.1215 116.113 11.0114 115.979 11.9921C116.699 11.3746 117.237 10.6845 117.591 9.92168C117.957 9.14681 118.14 8.44457 118.14 7.81498C118.14 7.10064 118.006 6.74347 117.737 6.74347ZM121.264 20.9455C120.8 20.9455 120.47 20.7034 120.275 20.2191C120.092 19.7348 120 18.9599 120 17.8944C120 16.3205 120.226 14.8252 120.678 13.4086C120.788 13.0575 120.965 12.8033 121.209 12.6459C121.465 12.4764 121.819 12.3916 122.271 12.3916C122.515 12.3916 122.686 12.4219 122.784 12.4824C122.881 12.5429 122.93 12.658 122.93 12.8275C122.93 13.0212 122.839 13.4571 122.655 14.1351C122.533 14.6194 122.436 15.0431 122.362 15.4064C122.289 15.7696 122.228 16.2176 122.179 16.7503C122.582 15.709 123.034 14.8615 123.534 14.2077C124.035 13.5539 124.523 13.0878 124.999 12.8093C125.488 12.5308 125.933 12.3916 126.336 12.3916C127.13 12.3916 127.527 12.7851 127.527 13.5721C127.527 13.7295 127.472 14.1109 127.362 14.7162C127.264 15.2005 127.215 15.5032 127.215 15.6243C127.215 16.048 127.368 16.2599 127.673 16.2599C128.015 16.2599 128.454 15.9936 128.992 15.4608C129.15 15.3034 129.315 15.2247 129.486 15.2247C129.645 15.2247 129.767 15.2974 129.852 15.4427C129.95 15.5759 129.999 15.7575 129.999 15.9875C129.999 16.4355 129.877 16.7866 129.632 17.0409C129.291 17.392 128.888 17.6947 128.424 17.9489C127.972 18.1911 127.49 18.3121 126.977 18.3121C126.33 18.3121 125.836 18.1487 125.494 17.8218C125.164 17.4949 124.999 17.053 124.999 16.496C124.999 16.3144 125.018 16.1328 125.054 15.9512C125.079 15.709 125.091 15.5456 125.091 15.4608C125.091 15.2671 125.024 15.1703 124.89 15.1703C124.706 15.1703 124.462 15.3761 124.157 15.7877C123.864 16.1873 123.571 16.72 123.278 17.3859C122.985 18.0518 122.747 18.7541 122.564 19.4926C122.43 20.0617 122.271 20.4491 122.088 20.6549C121.917 20.8487 121.642 20.9455 121.264 20.9455ZM136.464 16.8048C136.623 16.8048 136.745 16.8774 136.831 17.0227C136.928 17.168 136.977 17.3678 136.977 17.622C136.977 18.1063 136.861 18.4817 136.629 18.748C136.177 19.2929 135.537 19.7953 134.706 20.2554C133.888 20.7155 133.009 20.9455 132.069 20.9455C130.788 20.9455 129.793 20.6005 129.084 19.9103C128.376 19.2202 128.022 18.2758 128.022 17.0772C128.022 16.2418 128.199 15.4669 128.553 14.7526C128.907 14.0261 129.396 13.451 130.018 13.0272C130.653 12.6035 131.367 12.3916 132.161 12.3916C132.869 12.3916 133.437 12.6035 133.864 13.0272C134.291 13.4389 134.505 14.0019 134.505 14.7162C134.505 15.5516 134.2 16.272 133.589 16.8774C132.991 17.4707 131.972 17.9429 130.531 18.294C130.836 18.8509 131.416 19.1294 132.271 19.1294C132.82 19.1294 133.443 18.9417 134.139 18.5664C134.847 18.179 135.457 17.6765 135.97 17.059C136.116 16.8895 136.281 16.8048 136.464 16.8048ZM131.85 14.1714C131.398 14.1714 131.013 14.4317 130.696 14.9523C130.391 15.4729 130.238 16.1025 130.238 16.8411V16.8774C130.958 16.7079 131.526 16.4537 131.941 16.1146C132.356 15.7756 132.564 15.3821 132.564 14.9342C132.564 14.7041 132.497 14.5225 132.362 14.3893C132.24 14.244 132.069 14.1714 131.85 14.1714ZM143.653 16.8048C143.812 16.8048 143.934 16.8774 144.02 17.0227C144.117 17.168 144.166 17.3678 144.166 17.622C144.166 18.1063 144.05 18.4817 143.818 18.748C143.367 19.2929 142.726 19.7953 141.895 20.2554C141.077 20.7155 140.199 20.9455 139.258 20.9455C137.977 20.9455 136.982 20.6005 136.274 19.9103C135.565 19.2202 135.211 18.2758 135.211 17.0772C135.211 16.2418 135.388 15.4669 135.743 14.7526C136.097 14.0261 136.585 13.451 137.208 13.0272C137.842 12.6035 138.557 12.3916 139.35 12.3916C140.058 12.3916 140.626 12.6035 141.053 13.0272C141.48 13.4389 141.694 14.0019 141.694 14.7162C141.694 15.5516 141.389 16.272 140.778 16.8774C140.18 17.4707 139.161 17.9429 137.72 18.294C138.025 18.8509 138.605 19.1294 139.46 19.1294C140.009 19.1294 140.632 18.9417 141.328 18.5664C142.036 18.179 142.646 17.6765 143.159 17.059C143.305 16.8895 143.47 16.8048 143.653 16.8048ZM139.039 14.1714C138.587 14.1714 138.202 14.4317 137.885 14.9523C137.58 15.4729 137.427 16.1025 137.427 16.8411V16.8774C138.148 16.7079 138.715 16.4537 139.13 16.1146C139.545 15.7756 139.753 15.3821 139.753 14.9342C139.753 14.7041 139.686 14.5225 139.551 14.3893C139.429 14.244 139.258 14.1714 139.039 14.1714ZM145.697 14.1169C145.672 14.7223 145.66 15.1945 145.66 15.5335C145.66 16.4052 145.703 17.0893 145.788 17.5857C145.886 18.07 146.038 18.4211 146.246 18.639C146.466 18.8449 146.765 18.9478 147.143 18.9478C147.339 18.9478 147.571 18.8872 147.839 18.7662C148.108 18.6451 148.352 18.4877 148.572 18.294C148.706 18.1729 148.84 18.1124 148.975 18.1124C149.121 18.1124 149.237 18.1971 149.322 18.3666C149.42 18.524 149.469 18.7177 149.469 18.9478C149.469 19.1778 149.42 19.4018 149.322 19.6197C149.237 19.8377 149.103 20.0193 148.92 20.1646C148.285 20.6852 147.564 20.9455 146.759 20.9455C145.599 20.9455 144.75 20.4673 144.213 19.5108C143.676 18.5422 143.408 17.283 143.408 15.7333C143.408 15.2005 143.426 14.6617 143.463 14.1169H142.748C142.382 14.1169 142.132 14.0503 141.998 13.9171C141.875 13.784 141.814 13.5721 141.814 13.2815C141.814 12.6035 142.089 12.2645 142.638 12.2645H143.682C143.89 10.9327 144.207 9.71585 144.634 8.61407C145.062 7.5123 145.575 6.63451 146.173 5.98071C146.783 5.32691 147.436 5 148.132 5C148.645 5 149.048 5.22399 149.341 5.67196C149.634 6.11994 149.78 6.68294 149.78 7.36095C149.78 9.23761 148.987 10.8721 147.4 12.2645H149.451C149.646 12.2645 149.786 12.3069 149.872 12.3916C149.957 12.4764 150 12.6338 150 12.8638C150 13.6992 149.31 14.1169 147.931 14.1169H145.697ZM147.638 6.74347C147.455 6.74347 147.247 6.97352 147.015 7.4336C146.795 7.88158 146.582 8.51116 146.374 9.32236C146.179 10.1215 146.014 11.0114 145.88 11.9921C146.6 11.3746 147.137 10.6845 147.491 9.92168C147.857 9.14681 148.041 8.44457 148.041 7.81498C148.041 7.10064 147.906 6.74347 147.638 6.74347Z"
              fill="#010A5A"
            />
          </svg>
        </div>

        <div className=" flex bg-white rounded-md outline outline-2 text-blue-500 outline-blue-300  items-center ">
          <AiOutlineSearch className=" ml-4 w-6 h-6" />
          <input
            className="py-3 p-3 rounded-md px-6 outline-none "
            placeholder="search someting"
            type="text"
          ></input>
        </div>

        <div className="flex ">
          <ul className="flex gap-4">
            <li>
              <NavLink to="/"> Home </NavLink>
            </li>
            <li>
              <NavLink to="/AboutUs"> About Us </NavLink>
            </li>

            <li>
              <NavLink to="/OurProducts"> Our Products</NavLink>
            </li>
            <li>
              <NavLink to="SignIn">Sign In</NavLink>
            </li>
          </ul>
        </div>

        <div className=" ">
          <AiOutlineShoppingCart className="w-8  h-8" />
        </div>
      </nav>

      <Outlet />
    </div>
  );
};

export default Navbar;
