"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const newRecordCollector_js_1 = require("./newRecordCollector.js");
const database_service_1 = require("./database.service");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const databaseService = app.get(database_service_1.DatabaseService);
    const collector = new newRecordCollector_js_1.Collector(databaseService);
    await collector.collectRecords();
}
bootstrap();
//# sourceMappingURL=main.js.map