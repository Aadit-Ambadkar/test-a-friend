const airtable = require('airtable');

const base = new airtable({apiKey: `${process.env.AIRTABLE_API_KEY}`}).base(`${process.env.AIRTABLE_BASE_ID}`);
const table = base(`${process.env.AIRTABLE_TABLE_NAME}`);

const minifyRecords = (records) => {
    return records.map((record) => getMinifiedRecord(record));
};
const getMinifiedRecord = (record) => {
    return {
        id: record.id,
        fields: record.fields,
    };
};

export { table, getMinifiedRecord, minifyRecords };

export default async (req, res) => {
    res.status(404).json({ message: 'Not Found' });
}