/**
 * This JS file was auto-generated via Terser.
 *
 * Contributors should avoid editing this file, but instead edit the associated
 * non minified file file. For more information, check out our engineering docs
 * on how we handle JS minification in our engineering docs.
 *
 * @see: https://evnt.is/dev-docs-minification
 */

tribe.tickets=tribe.tickets||{},tribe.tickets.data={},function($,obj){const $document=$(document);obj.storeLocal=function(eventId){const postId=eventId||tribe.tickets.utils.getTicketsPostId(),$form=tribe.tickets.utils.getTicketsFormFromPostId(postId),tickets=tribe.tickets.block.getTicketsForCart($form),$metaFormItems=$form.closest(tribe.tickets.block.selectors.container).find(tribe.tickets.modal.metaItem),meta=obj.getMetaForSave($metaFormItems);sessionStorage.setItem("tribe_tickets_attendees-"+postId,JSON.stringify(meta)),sessionStorage.setItem("tribe_tickets_cart-"+postId,JSON.stringify(tickets))},obj.getMetaForSave=function($items){const meta=[],tempMeta=[];return $items.each((function(){const data={},$row=$(this),ticketId=$row.data("ticket-id"),$fields=$row.find(tribe.tickets.meta.selectors.formFieldInput);$fields.length&&(tempMeta[ticketId]||(tempMeta[ticketId]={},tempMeta[ticketId].ticket_id=ticketId,tempMeta[ticketId].items=[]),$fields.each((function(){const $field=$(this);let value=$field.val();const isRadio=$field.is(":radio");let name=$field.attr("name");if(name=name.split("["),name=name.pop().replace("]",""),(isRadio||$field.is(":checkbox"))&&!$field.prop("checked")){if(isRadio&&""!==data[name])return;value=""}data[name]=value})),tempMeta[ticketId].items.push(data))})),Object.keys(tempMeta).forEach((function(index){const newArr={ticket_id:index,items:tempMeta[index].items};meta.push(newArr)})),meta},obj.clearLocal=function(eventId){const postId=eventId||tribe.tickets.utils.getTicketsPostId();sessionStorage.removeItem("tribe_tickets_attendees-"+postId),sessionStorage.removeItem("tribe_tickets_cart-"+postId)},obj.getLocal=function(eventId){const postId=eventId||tribe.tickets.utils.getTicketsPostId(),meta=JSON.parse(sessionStorage.getItem("tribe_tickets_attendees-"+postId)),tickets=JSON.parse(sessionStorage.getItem("tribe_tickets_cart-"+postId)),ret={};return ret.meta=meta,ret.tickets=tickets,ret},obj.getData=function(pageLoad,eventId){let ret={meta:{},tickets:{}};const deferred=$.Deferred(),postId=eventId||tribe.tickets.utils.getTicketsPostId(),meta=JSON.parse(sessionStorage.getItem("tribe_tickets_attendees-"+postId));if(null!==meta&&(ret.meta=meta),!pageLoad){const tickets=JSON.parse(sessionStorage.getItem("tribe_tickets_cart-"+postId));null!==tickets&&tickets.length&&(ret.tickets=tickets),deferred.resolve(ret)}if(!ret.tickets||!ret.meta){const $providerId=tribe.tickets.utils.getTicketsProviderIdFromPostId(postId);$.ajax({type:"GET",data:{provider:$providerId,post_id:postId},dataType:"json",url:tribe.tickets.utils.getRestEndpoint(),success:function(data){null===meta&&sessionStorage.setItem("tribe_tickets_attendees-"+postId,JSON.stringify(data.meta)),sessionStorage.setItem("tribe_tickets_cart-"+postId,JSON.stringify(data.tickets)),ret={meta:data.meta,tickets:data.tickets},deferred.resolve(ret)},error:function(){deferred.reject(!1)}})}return deferred.promise()},obj.ready=function(){$document.on("beforeunload",(function(){if(window.tribe.tickets.modal_redirect)return void tribe.tickets.data.clearLocal();$document.find(tribe.tickets.block.selectors.container).each((function(index,block){const blockPostId=$(block).find(tribe.tickets.block.selectors.form).data("post-id");obj.data.storeLocal(blockPostId)}))}))},$(obj.ready)}(jQuery,tribe.tickets.data);