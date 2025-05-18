package com.aukevanoost.domain.dao.mock.db;

import com.aukevanoost.domain.entities.*;

import java.util.List;
import java.util.Map;
import java.util.function.IntFunction;
import java.util.stream.Stream;

public class Products {

    public static Map<String, Product> ALL = Map.ofEntries(
        Map.entry("AU-01", new Product(
            "TerraFirma AutoCultivator T-300",
            "AU-01",
            List.of(
                "Precision GPS mapping optimizes field coverage.",
                "Hybrid engine ensures eco-friendly extended operation.",
                "Fully autonomous with smart obstacle detection and terrain adaptation."
            ),
            List.of(
                new Variant(
                    "Silver",
                    "/img/product/[size]/AU-01-SI.webp",
                    "AU-01-SI",
                    "#C0C0C0",
                    1000,
                    8
                )
            )
        )),
        Map.entry("AU-02", new Product(
            "SmartFarm Titan",
            "AU-02",
            List.of(
                "Advanced autopilot technology for precise farming operations.",
                "Eco-friendly solar-assisted power system for sustainable use.",
                "Intelligent AI for real-time field analysis and automated adjustments."
            ),
            List.of(
                new Variant(
                    "Sunset Copper",
                    "/img/product/[size]/AU-02-OG.webp",
                    "AU-02-OG",
                    "#dd5219",
                    4100,
                    4
                ),
                new Variant(
                    "Cosmic Sapphire",
                    "/img/product/[size]/AU-02-BL.webp",
                    "AU-02-BL",
                    "#2A52BE",
                    4000,
                    3
                ),
                new Variant(
                    "Verdant Shadow",
                    "/img/product/[size]/AU-02-GG.webp",
                    "AU-02-GG",
                    "#005A04",
                    4000,
                    6
                )
            )
        )),
        Map.entry("AU-03", new Product(
            "FutureHarvest Navigator",
            "AU-03",
            List.of(
                "Autonomous navigation with sub-inch accuracy",
                "Solar-enhanced hybrid powertrain for extended operation",
                "Real-time crop and soil health analytics"
            ),
            List.of(
                new Variant(
                    "Turquoise Titan",
                    "/img/product/[size]/AU-03-TQ.webp",
                    "AU-03-TQ",
                    "#169fb8",
                    1600,
                    9
                ),
                new Variant(
                    "Majestic Violet",
                    "/img/product/[size]/AU-03-PL.webp",
                    "AU-03-PL",
                    "#9B5FC0",
                    1700,
                    7
                ),
                new Variant(
                    "Scarlet Dynamo",
                    "/img/product/[size]/AU-03-RD.webp",
                    "AU-03-RD",
                    "#FF2400",
                    1900,
                    8
                ),
                new Variant(
                    "Sunbeam Yellow",
                    "/img/product/[size]/AU-03-YE.webp",
                    "AU-03-YE",
                    "#faad00",
                    1800,
                    3
                )
            )
        )),
        Map.entry("AU-04", new Product(
            "Sapphire Sunworker 460R",
            "AU-04",
            List.of(
                "Next-generation autonomous guidance system for seamless operation",
                "High-capacity energy storage for all-day work without recharge",
                "Advanced analytics suite for precision soil and plant health management"
            ),
            List.of(
                new Variant(
                    "Ruby Red",
                    "/img/product/[size]/AU-04-RD.webp",
                    "AU-04-RD",
                    "#9B111E",
                    8700,
                    9
                ),
                new Variant(
                    "Midnight Onyx",
                    "/img/product/[size]/AU-04-BK.webp",
                    "AU-04-BK",
                    "#353839",
                    8500,
                    8
                )
            )
        )),
        Map.entry("AU-05", new Product(
            "EcoGrow Crop Commander",
            "AU-05",
            List.of(
                "Ultra-precise field navigation technology",
                "Dual-mode power system for maximum uptime",
                "On-the-go field data analysis for smart farming decisions"
            ),
            List.of(
                new Variant(
                    "Zestful Horizon",
                    "/img/product/[size]/AU-05-ZH.webp",
                    "AU-05-ZH",
                    "#FFA07A",
                    3400,
                    8
                )
            )
        )),
        Map.entry("AU-06", new Product(
            "FarmFleet Sovereign",
            "AU-06",
            List.of(
                "Robust all-terrain adaptability for diverse farm landscapes",
                "High-efficiency energy matrix for longer field endurance",
                "Integrated crop management system with advanced diagnostics"
            ),
            List.of(
                new Variant(
                    "Canary Zenith",
                    "/img/product/[size]/AU-06-CZ.webp",
                    "AU-06-CZ",
                    "#FFD700",
                    2200,
                    3
                ),
                new Variant(
                    "Minted Jade",
                    "/img/product/[size]/AU-06-MT.webp",
                    "AU-06-MT",
                    "#628882",
                    2100,
                    5
                )
            )
        )),
        Map.entry("AU-07", new Product(
            "Verde Voyager",
            "AU-07",
            List.of(
                "Adaptive drive system intelligently navigates through diverse field conditions",
                "Clean energy operation with advanced solar battery technology",
                "High-resolution field scanners for precise agronomy insights"
            ),
            List.of(
                new Variant(
                    "Glacial Mint",
                    "/img/product/[size]/AU-07-MT.webp",
                    "AU-07-MT",
                    "#AFDBD2",
                    4000,
                    4
                ),
                new Variant(
                    "Sunbeam Yellow",
                    "/img/product/[size]/AU-07-YE.webp",
                    "AU-07-YE",
                    "#FFDA03",
                    5000,
                    9
                )
            )
        )),
        Map.entry("AU-08", new Product(
            "Field Pioneer",
            "AU-08",
            List.of(
                "Automated field traversal with intelligent pathfinding algorithms",
                "Eco-friendly electric motors paired with high-capacity batteries",
                "Real-time environmental monitoring for optimal crop growth"
            ),
            List.of(
                new Variant(
                    "Polar White",
                    "/img/product/[size]/AU-08-WH.webp",
                    "AU-08-WH",
                    "#E8E8E8",
                    4500,
                    4
                )
            )
        )),
        Map.entry("CL-01", new Product(
            "Heritage Workhorse",
            "CL-01",
            List.of(
                "Proven reliability with a touch of modern reliability enhancements",
                "Robust construction equipped to withstand decades of labor",
                "User-friendly operation with traditional manual controls"
            ),
            List.of(
                new Variant(
                    "Verdant Field",
                    "/img/product/[size]/CL-01-GR.webp",
                    "CL-01-GR",
                    "#6B8E23",
                    5700,
                    8
                ),
                new Variant(
                    "Stormy Sky",
                    "/img/product/[size]/CL-01-GY.webp",
                    "CL-01-GY",
                    "#708090",
                    6200,
                    7
                )
            )
        )),
        Map.entry("CL-02", new Product(
            "Falcon Crest Farm",
            "CL-02",
            List.of(
                "Rugged simplicity meets classic design",
                "Built-to-last machinery for reliable fieldwork",
                "Ease of control with straightforward mechanical systems"
            ),
            List.of(
                new Variant(
                    "Cerulean Classic",
                    "/img/product/[size]/CL-02-BL.webp",
                    "CL-02-BL",
                    "#007BA7",
                    2600,
                    1
                )
            )
        )),
        Map.entry("CL-03", new Product(
            "Falcon Crest Work",
            "CL-03",
            List.of(
                "Vintage engineering with a legacy of durability",
                "Powerful yet simple mechanics for easy operation and repair",
                "Classic aesthetics with a robust body, built to last"
            ),
            List.of(
                new Variant(
                    "Meadow Green",
                    "/img/product/[size]/CL-03-GR.webp",
                    "CL-03-GR",
                    "#7CFC00",
                    2300,
                    7
                ),
                new Variant(
                    "Rustic Rose",
                    "/img/product/[size]/CL-03-PI.webp",
                    "CL-03-PI",
                    "#b50018",
                    2300,
                    3
                ),
                new Variant(
                    "Harvest Gold",
                    "/img/product/[size]/CL-03-YE.webp",
                    "CL-03-YE",
                    "#DA9100",
                    2300,
                    6
                )
            )
        )),
        Map.entry("CL-04", new Product(
            "Broadfield Majestic",
            "CL-04",
            List.of(
                "Built with the robust heart of early industrial workhorses",
                "Simplified mechanics for unparalleled ease of use and maintenance",
                "A testament to early agricultural machinery with a dependable engine"
            ),
            List.of(
                new Variant(
                    "Oceanic Blue",
                    "/img/product/[size]/CL-04-BL.webp",
                    "CL-04-BL",
                    "#0040a6",
                    2200,
                    6
                ),
                new Variant(
                    "Rustic Crimson",
                    "/img/product/[size]/CL-04-RD.webp",
                    "CL-04-RD",
                    "#7B3F00",
                    2200,
                    3
                ),
                new Variant(
                    "Aqua Green",
                    "/img/product/[size]/CL-04-TQ.webp",
                    "CL-04-TQ",
                    "#00b298",
                    2200,
                    0
                )
            )
        )),
        Map.entry("CL-05", new Product(
            "Countryside Commander",
            "CL-05",
            List.of(
                "Reliable performance with time-tested engineering",
                "Rugged design for efficient operation across all types of terrain",
                "Classic operator comfort with modern ergonomic enhancements"
            ),
            List.of(
                new Variant(
                    "Pacific Teal",
                    "/img/product/[size]/CL-05-PT.webp",
                    "CL-05-PT",
                    "#479da8",
                    2700,
                    1
                ),
                new Variant(
                    "Barn Red",
                    "/img/product/[size]/CL-05-RD.webp",
                    "CL-05-RD",
                    "#7C0A02",
                    2700,
                    1
                )
            )
        )),
        Map.entry("CL-06", new Product(
            "Danamark Steadfast",
            "CL-06",
            List.of(
                "Engineered for the meticulous demands of Danish agriculture",
                "Sturdy chassis and reliable mechanics for longevity",
                "Utilitarian design with practical functionality and comfort"
            ),
            List.of(
                new Variant(
                    "Emerald Forest",
                    "/img/product/[size]/CL-06-MT.webp",
                    "CL-06-MT",
                    "#46f5bb",
                    2800,
                    1
                ),
                new Variant(
                    "Golden Wheat",
                    "/img/product/[size]/CL-06-YE.webp",
                    "CL-06-YE",
                    "#faaf3f",
                    2800,
                    2
                )
            )
        )),
        Map.entry("CL-07", new Product(
            "Greenland Rover",
            "CL-07",
            List.of(
                "Engineered to tackle the diverse European terrain with ease",
                "Sturdy and reliable mechanics known for their longevity",
                "Ergonomically designed for comfort during long working hours"
            ),
            List.of(
                new Variant(
                    "Forest Fern",
                    "/img/product/[size]/CL-07-GR.webp",
                    "CL-07-GR",
                    "#2ea250",
                    2900,
                    4
                ),
                new Variant(
                    "Autumn Amber",
                    "/img/product/[size]/CL-07-YE.webp",
                    "CL-07-YE",
                    "#FFBF00",
                    2900,
                    4
                )
            )
        )),
        Map.entry("CL-08", new Product(
            "Holland Hamster",
            "CL-08",
            List.of(
                "Dutch craftsmanship for precision and quality",
                "Optimized for tulip fields and versatile European landscapes",
                "Ergonomic design with a focus on operator comfort and efficiency"
            ),
            List.of(
                new Variant(
                    "Polder Green",
                    "/img/product/[size]/CL-08-GR.webp",
                    "CL-08-GR",
                    "#C2B280",
                    7750,
                    8
                ),
                new Variant(
                    "Tulip Magenta",
                    "/img/product/[size]/CL-08-PI.webp",
                    "CL-08-PI",
                    "#D65282",
                    7900,
                    3
                )
            )
        )),
        Map.entry("CL-09", new Product(
            "TerraFirma Veneto",
            "CL-09",
            List.of(
                "Elegant Italian design with sleek lines and a vibrant aesthetic",
                "Precision mechanics for vineyard and orchard maneuverability",
                "Comfort-focused design with a flair for the dramatic"
            ),
            List.of(
                new Variant(
                    "Adriatic Blue",
                    "/img/product/[size]/CL-09-BL.webp",
                    "CL-09-BL",
                    "#2f6ea3",
                    2950,
                    4
                ),
                new Variant(
                    "Tuscan Green",
                    "/img/product/[size]/CL-09-GR.webp",
                    "CL-09-GR",
                    "#518b2b",
                    2950,
                    7
                )
            )
        )),
        Map.entry("CL-10", new Product(
            "Global Gallant",
            "CL-10",
            List.of(
                "Retro design with a nod to the golden era of farming",
                "Engine robustness that stands the test of time",
                "Functional simplicity for ease of operation in any region"
            ),
            List.of(
                new Variant(
                    "Sahara Dawn",
                    "/img/product/[size]/CL-10-SD.webp",
                    "CL-10-SD",
                    "#b8a875",
                    2600,
                    6
                ),
                new Variant(
                    "Violet Vintage",
                    "/img/product/[size]/CL-10-VI.webp",
                    "CL-10-VI",
                    "#8A2BE2",
                    2600,
                    2
                )
            )
        )),
        Map.entry("CL-11", new Product(
            "Scandinavia Sower",
            "CL-11",
            List.of(
                "Authentic Swedish engineering for optimal cold-climate performance",
                "Sturdy build and mechanics for lifelong reliability",
                "Iconic design reflecting the simplicity and efficiency of Scandinavian style"
            ),
            List.of(
                new Variant(
                    "Baltic Blue",
                    "/img/product/[size]/CL-11-SK.webp",
                    "CL-11-SK",
                    "#95c1f4",
                    3100,
                    0
                ),
                new Variant(
                    "Nordic Gold",
                    "/img/product/[size]/CL-11-YE.webp",
                    "CL-11-YE",
                    "#FFD700",
                    3100,
                    3
                )
            )
        )),
        Map.entry("CL-12", new Product(
            "Celerity Cruiser",
            "CL-12",
            List.of(
                "A speedster in the classic tractor segment, unparalleled in quick task completion",
                "Sleek design with aerodynamic contours for reduced drag",
                "Enhanced gearbox for smooth acceleration and nimble handling"
            ),
            List.of(
                new Variant(
                    "Velocity Blue",
                    "/img/product/[size]/CL-12-BL.webp",
                    "CL-12-BL",
                    "#1E90FF",
                    3200,
                    8
                ),
                new Variant(
                    "Rally Red",
                    "/img/product/[size]/CL-12-RD.webp",
                    "CL-12-RD",
                    "#ED2939",
                    3200,
                    8
                )
            )
        )),
        Map.entry("CL-13", new Product(
            "Rapid Racer",
            "CL-13",
            List.of(
                "Streamlined design for faster field operations",
                "Optimized gear ratios for efficient power transmission",
                "Advanced air flow system for superior engine cooling"
            ),
            List.of(
                new Variant(
                    "Speedway Blue",
                    "/img/product/[size]/CL-13-BL.webp",
                    "CL-13-BL",
                    "#2679a6",
                    7500,
                    1
                ),
                new Variant(
                    "Raceway Red",
                    "/img/product/[size]/CL-13-RD.webp",
                    "CL-13-RD",
                    "#CF1020",
                    7500,
                    5
                )
            )
        )),
        Map.entry("CL-14", new Product(
            "Caribbean Cruiser",
            "CL-14",
            List.of(
                "Robust construction for enduring performance",
                "Time-tested design with a proven track record",
                "Easy-to-service mechanics for long-term reliability"
            ),
            List.of(
                new Variant(
                    "Emerald Grove",
                    "/img/product/[size]/CL-14-GR.webp",
                    "CL-14-GR",
                    "#57ae13",
                    2300,
                    3
                ),
                new Variant(
                    "Ruby Fields",
                    "/img/product/[size]/CL-14-RD.webp",
                    "CL-14-RD",
                    "#cd2b1e",
                    2300,
                    5
                )
            )
        )),
        Map.entry("CL-15", new Product(
            "Fieldmaster Classic",
            "CL-15",
            List.of(
                "Timeless design with a focus on comfort and control",
                "Efficient fuel consumption with a powerful engine",
                "Versatile functionality for all types of agricultural work"
            ),
            List.of(
                new Variant(
                    "Vintage Pink",
                    "/img/product/[size]/CL-15-PI.webp",
                    "CL-15-PI",
                    "#e1949e",
                    6200,
                    0
                ),
                new Variant(
                    "Sahara Dust",
                    "/img/product/[size]/CL-15-SD.webp",
                    "CL-15-SD",
                    "#dec78c",
                    6200,
                    9
                )
            )
        ))
    );

    public static Stream<Product> stream() {
        return ALL.values().stream();
    }

    public static Product get(String sku) {
        return ALL.get(sku);
    }

    public static IntFunction<Product> getByID(String tractorClass) {
        return id -> get(String.format("%s-%02d", tractorClass, id));
    }
}