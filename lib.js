import { Jsonix } from 'jsonix'
import fs from 'fs'
import path from 'path'

export function doStuff () {
  const context = new Jsonix.Context([xmlScheme])
  const unmarshaller = context.createUnmarshaller(xmlScheme)

  const xmlData = fs.readFileSync(path.resolve('./test-data.xml')).toString()
  console.log('xmlData', xmlData)

  const jsonData = unmarshaller.unmarshalString(xmlData)
  console.log('jsonData', jsonData)

  return { name: 'John Doe' }
}

const xmlScheme = {
  name: 'PO',
  typeInfos: [{
      type: 'classInfo',
      localName: 'PurchaseOrderType',
      propertyInfos: [{
          type: 'element',
          name: 'shipTo',
          elementName: 'shipTo',
          typeInfo: 'PO.USAddress'
      }, {
          type: 'element',
          name: 'billTo',
          elementName: 'billTo',
          typeInfo: 'PO.USAddress'
      }, {
          type: 'element',
          name: 'comment',
          elementName: 'comment',
          typeInfo: 'String'
      }, {
          type: 'element',
          name: 'items',
          elementName: 'items',
          typeInfo: 'PO.Items'
      }, {
          name: 'orderDate',
          typeInfo: 'Calendar',
          attributeName: 'orderDate',
          type: 'attribute'
      }]
  }, {
      type: 'classInfo',
      localName: 'Items',
      propertyInfos: [{
          type: 'element',
          name: 'item',
          collection: true,
          elementName: 'item',
          typeInfo: 'PO.Item'
      }]
  }, {
      type: 'classInfo',
      localName: 'USAddress',
      propertyInfos: [{
          type: 'element',
          name: 'name',
          elementName: 'name',
          typeInfo: 'String'
      }, {
          type: 'element',
          name: 'street',
          elementName: 'street',
          typeInfo: 'String'
      }, {
          type: 'element',
          name: 'city',
          elementName: 'city',
          typeInfo: 'String'
      }, {
          type: 'element',
          name: 'state',
          elementName: 'state',
          typeInfo: 'String'
      }, {
          type: 'element',
          name: 'zip',
          elementName: 'zip',
          typeInfo: 'Decimal'
      }, {
          name: 'country',
          typeInfo: 'String',
          attributeName: 'country',
          type: 'attribute'
      }]
  }, {
      type: 'classInfo',
      localName: 'Item',
      propertyInfos: [{
          type: 'element',
          name: 'productName',
          elementName: 'productName',
          typeInfo: 'String'
      }, {
          type: 'element',
          name: 'quantity',
          elementName: 'quantity',
          typeInfo: 'Int'
      }, {
          type: 'element',
          name: 'usPrice',
          elementName: 'USPrice',
          typeInfo: 'Decimal'
      }, {
          type: 'element',
          name: 'comment',
          elementName: 'comment',
          typeInfo: 'String'
      }, {
          type: 'element',
          name: 'shipDate',
          elementName: 'shipDate',
          typeInfo: 'Calendar'
      }, {
          name: 'partNum',
          typeInfo: 'String',
          attributeName: 'partNum',
          type: 'attribute'
      }]
  }],
  elementInfos: [{
      elementName: 'purchaseOrder',
      typeInfo: 'PO.PurchaseOrderType'
  }, {
      elementName: 'comment',
      typeInfo: 'String'
  }]
}
