            function apply80YuanPromo(items) {
                var numSix = Math.floor(items / 6);
                var numTwo = Math.floor((items % 6) / 2);
                var numOne = (items % 6) % 2;
                var priceForOne = 80;
                var priceForTwo = 150;
                var priceForSix = 400;
                var result = (numSix * priceForSix) + (numTwo * priceForTwo) + (numOne * priceForOne);
                return result;
            }

            function getAppUrl() {
                return "https://script.google.com/macros/s/AKfycbzo4jZekb1pzF6-uG7xg8hmHAmsYoUZwfjVx8P9Es3lCbuSxso/exec";
            }

            function getFlavorTheme(flavor) {
                switch (flavor.toLowerCase()) {
                    case "banana": return "e";
                    case "carrot": return "d";
                    case "chocolate": return "f";
                    case "redvelvet": return "c";
                    case "vanilla": return "b";
                    default: return "a";
                }
            }

            function getCatalog() {
                var result = {};
                result.items = [];

                var sku000 = { category: "bundt-original-07", flavor: "chocolate", quantity: 0, price: 80 };
                //var sku006 = { category: "bundt-original-24", flavor: "chocolate", quantity: 0, price: 1000 };
                var sku001 = { category: "cakePop-original", flavor: "chocolate", quantity: 0, price: 80 };
                var sku002 = { category: "cakePop-original", flavor: "vanilla", quantity: 0, price: 80 };
                var sku003 = { category: "cupcake-original", flavor: "carrot", quantity: 0, price: 80 };
                var sku004 = { category: "cupcake-original", flavor: "redVelvet", quantity: 0, price: 80 };
                var sku005 = { category: "cupcake-original", flavor: "vanilla", quantity: 0, price: 80 };

                result.items.push(sku000);
                result.items.push(sku001);
                result.items.push(sku002);
                result.items.push(sku003);
                result.items.push(sku004);
                result.items.push(sku005);
                //result.items.push(sku006);

                return result;
            }

            function getNumItems(items) {
                var result = 0;
                for (var i = 0; i < items.length; i++) {
                    result += Number(items[i].quantity[0]);
                }
                return result;
            }

            function getNumSkus() {
                return 6;
            }

            function getOrder() {
                var total = getTotal();
                var result = $("#order-form").serialize();
                result += "&total=" + total.cost;
                if (jQuery.isNumeric($("#order-number").html())) {
                    result += "&count=" + $("#order-number").html();
                }
                return result;
            }

            function getTotal() {
                var result = {};
                var promoItems = 0;
                var promoCost = 0;
                result.items = 0;
                result.cost = 0;
                var skus = getNumSkus();
                for (var i = 0; i < skus; i++) {
                    if (Number($("#sku" + i).attr("price")) == 80) {
                        promoItems += Number($("#sku" + i).val());
                    } else {
                        result.items += Number($("#sku" + i).val());
                        result.cost += (Number($("#sku" + i).val()) * Number($("#sku" + i).attr("price")));
                    }
                }
                result.items += promoItems;
                result.cost += apply80YuanPromo(promoItems);
                return result;
            }

            function initForm() {
                var catalog = getCatalog();
                var selectHtml = "";
                var id = "";
                for (var i = 0; i < catalog.items.length; i++) {
                    id = "sku" + i;
                    selectHtml = '<label for="' + id + '">' + catalog.items[i].flavor + '</label><select name="' + id + '" id="' + id + '" data-theme="' + getFlavorTheme(catalog.items[i].flavor) + '" price="' + catalog.items[i].price + '"></select>';
                    $("#" + catalog.items[i].category).append(selectHtml);
                }
                initSelects();
            }

            function initSelects() {
                var maxQuantity = 37;
                var selectElement;
                var skus = getNumSkus();
                for (var i = 0; i < skus; i++) {
                    selectElement = document.getElementById("sku" + i);
                    for (var j = 0; j < maxQuantity; j++) {
                        var optionElement = document.createElement("option");
                        optionElement.text = j;
                        try {
                            // for IE earlier than version 8
                            selectElement.add(optionElement, selectElement.options[null]);
                        }
                        catch (e) {
                            selectElement.add(optionElement, null);
                        }
                    }
                }
            }

            function resetForm(val) {
                var selectElement;
                var skus = getNumSkus();
                for (var i = 0; i < skus; i++) {
                    setQuantity(i, 0);
                }
                setDemographic(3);
                setTotal();
                $("body").data("order", null);
            }

            function setDemographic(num) {
                var segments = 4;
                for (var i = 0; i < segments; i++) {
                    if (i == num) {
                        $("#demographic-" + i).attr("checked", true).checkboxradio("refresh");
                    } else {
                        $("#demographic-" + i).attr("checked", false).checkboxradio("refresh");
                    }
                }
            }

            function setOrderNum(num) {
                $("#order-number").html(num);
            }

            function setQuantities(order) {
                var skus = getNumSkus();
                for (var i = 0; i < skus; i++) {
                    setQuantity(i, order.items[i].quantity);
                }
            }

            function setQuantity(sku, val) {
                $("#sku" + sku).val(val);
                $("#sku" + sku).selectmenu("refresh");
            }

            function setQuantities2(items) {
                for (var i = 0; i < items.length; i++) {
                    $("#sku0" + items[i].sku).html(items[i].quantity[0]);
                } 
                // table refresh not supported in this version of JQuery Mobile
                //$("#cupcake-table").table("refresh");
                //$("#cakepop-table").table("refresh");
                //$("#bundt-table").table("refresh");
            }

            function setTotal() {
                var total = getTotal();
                $("#order-total").html("$" + total.cost + " (" + total.items + ")");
                if (total.cost < 1) {
                    $("#order-submit").button("disable");
                } else {
                    $("#order-submit").button("enable");
                }
                // $("#order-submit").button("refresh");
            }
