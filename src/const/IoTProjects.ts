import { IoTProject } from "@/types/IoTProject"

export const iotProjects: IoTProject[] = [
    {
        id: "smart-home-hub",
        name: "Smart Home Hub",
        date: "2024 - obecnie",
        summary: "Centralne sterowanie inteligentnym domem — system łączy urządzenia IoT przez ESP32 i Raspberry Pi, umożliwiając zdalną kontrolę oświetlenia, czujników temperatury i automatyczne scenariusze.",
        technicalDescription: "ESP32 (C/Arduino), Raspberry Pi, MQTT, Python, REST API, SQLite, React (dashboard), Node-RED do automatyki.",
        media: [
            { type: "image", src: "iot-smart-home-1.png" },
            { type: "image", src: "iot-smart-home-2.png" }
        ],
        tech: ["ESP32", "Raspberry Pi", "MQTT", "Python", "C/C++", "REST API", "Node-RED"]
    },
    {
        id: "environment-monitor",
        name: "Environmental Monitor",
        date: "2023 - 2024",
        summary: "Stacja monitorująca jakość powietrza i parametry środowiskowe. Czujniki PM2.5, CO2, temperatury i wilgotności przesyłają dane w czasie rzeczywistym do lokalnego serwera i aplikacji mobilnej.",
        technicalDescription: "Arduino/ESP8266, czujniki (BME280, PMS5003, MH-Z19), InfluxDB, Grafana, WebSocket do streamowania danych.",
        media: [
            { type: "image", src: "iot-env-1.png" },
            { type: "video", src: "iot-env-demo.mov" }
        ],
        tech: ["Arduino", "ESP8266", "InfluxDB", "Grafana", "WebSocket", "MQTT"]
    },
    {
        id: "plant-automation",
        name: "Plant Automation System",
        date: "2024",
        summary: "Automatyczny system nawadniania i doświetlania roślin. Czujniki wilgotności gleby i natężenia światła sterują pompami i LEDami w szklarni lub domowej hodowli.",
        technicalDescription: "ESP32, czujniki wilgotności gleby, relaty, PWM do LED, aplikacja Flutter do konfiguracji, Firebase Realtime Database.",
        media: [
            { type: "image", src: "iot-plant-1.png" },
            { type: "image", src: "iot-plant-2.png" },
            { type: "image", src: "iot-plant-3.png" }
        ],
        tech: ["ESP32", "Flutter", "Firebase", "Arduino", "PWM", "Relay"]
    }
]
