#!/usr/bin/env node

const path = require('path');
const fs = require('fs');
const yaml = require('js-yaml');

const portalId = process.env.HUBSPOT_PORTAL_ID;
const HubSpotPersonalAccessKey = process.env.HUBSPOT_PERSONAL_ACCESS_KEY;

const portalConfig = {
  name: 'PROD',
  portalId,
  apiKey,
};

const config = {
  defaultPortal: 'PROD',
  portals: [portalConfig],
};

fs.writeFileSync(
  path.join(process.cwd(), 'hubspot.config.yml'),
  yaml.safeDump(config)
);
