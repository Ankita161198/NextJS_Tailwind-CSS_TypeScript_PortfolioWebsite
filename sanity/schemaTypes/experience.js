import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
   {
    name:'jobTitle',
    title:'JobTitle',
    type:'string',
   },
   {
    name:'companyImage',
    title:'companyImage',
    type:'image',
    options:{
      hotspot:true,
    }
   },
   {
    name:'company',
    title:'Company',
    type:'text',
   },
  
   {
    name:'dateStarted',
    title:'DateStarted',
    type:'date',
   },
   {
    name:'dateEnded',
    title:'DateEnded',
    type:'date',
   },
   {
    name:'isCurrentlyWorkingHere',
    title:'isCurrentlyWorkingHere',
    type:'boolean',
   },
   {
    name:'technologies',
    title:'Technologies',
    type:'array',
    of:[{type:'reference',to:{type:'skills'}}],
   },
   {
    name:'points',
    title:'Points',
    type:'array',
    of:[{type:'string'}],
   },
   
  ]

})
