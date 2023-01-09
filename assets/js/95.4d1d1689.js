(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{694:function(e,t,r){"use strict";r.r(t);var o=r(9),a=Object(o.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"how-to-add-an-altcoin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-to-add-an-altcoin"}},[e._v("#")]),e._v(" How to add an Altcoin")]),e._v(" "),t("p",[e._v("Bitcoin is the only focus of the project and its core developers. However, opt-in integrations are available for several altcoins.")]),e._v(" "),t("p",[e._v("For more information and the full list of integrated altcoins, check the "),t("RouterLink",{attrs:{to:"/FAQ/Altcoin/"}},[e._v("Altcoin FAQ page")]),e._v(".")],1),e._v(" "),t("h2",{attrs:{id:"how-can-i-add-an-altcoin-to-btcpayserver"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-can-i-add-an-altcoin-to-btcpayserver"}},[e._v("#")]),e._v(" How can I add an altcoin to BTCPayServer?")]),e._v(" "),t("p",[e._v("The steps for having a coin added are:")]),e._v(" "),t("ol",[t("li",[e._v("Add support for your crypto to "),t("a",{attrs:{href:"https://github.com/MetacoSA/NBitcoin/tree/master/NBitcoin.Altcoins",target:"_blank",rel:"noopener noreferrer"}},[e._v("NBitcoin"),t("OutboundLink")],1),e._v(", "),t("a",{attrs:{href:"https://github.com/dgarage/NBXplorer",target:"_blank",rel:"noopener noreferrer"}},[e._v("NBxplorer"),t("OutboundLink")],1),e._v(", and "),t("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver",target:"_blank",rel:"noopener noreferrer"}},[e._v("BTCPayServer"),t("OutboundLink")],1),e._v(". (Use examples from other coins)")]),e._v(" "),t("li",[e._v("Create your own docker image ("),t("a",{attrs:{href:"https://hub.docker.com/r/btcpayserver/bitcoin",target:"_blank",rel:"noopener noreferrer"}},[e._v("Example for BTC"),t("OutboundLink")],1),e._v(")")]),e._v(" "),t("li",[e._v("Create a docker-compose fragment ("),t("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver-docker/blob/master/docker-compose-generator/docker-fragments/bitcoin.yml",target:"_blank",rel:"noopener noreferrer"}},[e._v("Example for BTC"),t("OutboundLink")],1),e._v(")")]),e._v(" "),t("li",[e._v("Add your CryptoDefinition ("),t("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver-docker/blob/master/docker-compose-generator/src/CryptoDefinition.cs",target:"_blank",rel:"noopener noreferrer"}},[e._v("Example for BTC"),t("OutboundLink")],1),e._v(")")])]),e._v(" "),t("p",[e._v("When testing your coin, "),t("strong",[e._v("DO NOT USE "),t("code",[e._v("build.sh")])]),e._v(", since it uses a pre-built docker image.")]),e._v(" "),t("p",[e._v("Instead, install "),t("a",{attrs:{href:"https://dotnet.microsoft.com/en-us/download/dotnet/6.0",target:"_blank",rel:"noopener noreferrer"}},[e._v(".NET 6.0 SDK"),t("OutboundLink")],1),e._v(" and run:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("BTCPAYGEN_CRYPTO1")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"EXAMPLE-COIN"')]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("BTCPAYGEN_SUBNAME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"test"')]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" docker-compose-generator/src\ndotnet run\n")])])]),t("p",[e._v("This will generate your docker-compose in the "),t("code",[e._v("Generated")]),e._v(" folder, which you can then run and test.")]),e._v(" "),t("p",[e._v("Note: BTCPay developers do not implement alternative coins on request. Adding a new coin explicitly depends on the community and developers of those coins. Furthermore, BTCPay developers do not spend excessive time testing nor maintaining the altcoins. If you're submitting a PR for a new coin, make sure that your image works. If the altcoin integration is not actively maintained it will be removed from BTCPay.")])])}),[],!1,null,null,null);t.default=a.exports}}]);