const fs = require('fs');
const { defineConfig } = require('cypress');
const { lighthouse, prepareAudit } = require('@cypress-audit/lighthouse');
const ReportGenerator = require('lighthouse/report/generator/report-generator');
const { pa11y } = require('@cypress-audit/pa11y');

module.exports = defineConfig({
    projectId: 'up1ey2',
    e2e: {
        baseUrl: 'https://www.e-moto-x.de',
        viewportWidth: 1100,
        viewportHeight: 740,
        chromeWebSecurity: false,
        setupNodeEvents(on, config) {
            on('before:browser:launch', (browser = {}, launchOptions) => {
                prepareAudit(launchOptions);
                if (browser.name === 'chrome' && browser.isHeadless) {
                    launchOptions.args.push('--disable-gpu');
                    return launchOptions;
                }
            });

            on('task', {
                lighthouse: lighthouse(lighthouseReport => {
                    fs.mkdirSync('build/cypress', { recursive: true });
                    fs.writeFileSync(
                        'build/cypress/lhreport.html',
                        ReportGenerator.generateReport(
                            lighthouseReport.lhr,
                            'html',
                        ),
                    );
                }),
                pa11y: pa11y(console.log.bind(console)),
            });
        },
    },
    reporter: 'junit',
    reporterOptions: {
        mochaFile: 'build/cypress/test-results.xml',
    },
    lighthouse: {
        thresholds: {
            performance: 0,
            accessibility: 0,
            'best-practices': 0,
            seo: 0,
        },
    },
});
