"use strict";
// ------------------- List ------------------- //
Object.defineProperty(exports, "__esModule", { value: true });
const ListNode_1 = require("./ListNode");
// ----------- Helper merge function ---------- //
/**
 * We iterate through both lists, comparing the values of the current nodes. We append the lesser
 * value to the destination list, and move on to the next node in the list from which we took the
 * value
 * @param {ListNode | null} list1 - ListNode | null
 * @param {ListNode | null} list2 - ListNode | null
 * @returns A new linked list with the elements of list1 and list2 sorted.
 */
function merge(list1, list2) {
    // create head node and iterating (moving) node
    const destHead = new ListNode_1.ListNode();
    let currentNode = destHead;
    // while list1 or 2 has an unseen node
    while (list2 || list1) {
        // if all of list 2 elements have been seen
        // or list1 value is inferior to list2 value
        // append list 1 node to dest linked list
        if (!list2 || (list1 && list1.val <= list2.val)) {
            currentNode.val = list1 ? list1 === null || list1 === void 0 ? void 0 : list1.val : currentNode.val;
            list1 = list1 ? list1.next : list1;
        }
        // otherwise append list 2 node
        else {
            currentNode.val = list2.val;
            list2 = list2.next;
        }
        // if there exists a unseen non null node
        // create node in dest linked list
        if (list2 || list1) {
            currentNode.next = new ListNode_1.ListNode();
            currentNode = currentNode.next;
        }
    }
    // return head of new linked list
    return destHead;
}
// ------------- List Merger ----------- //
/**
 * We merge all non null lists into one list
 * @param lists - an array of linked lists
 * @returns A ListNode
 */
function mergeKLists(lists) {
    let destHead = null;
    const len = lists.length;
    // merge all non null lists
    for (let i = 0; i < len; i++) {
        if (lists[i]) {
            destHead = merge(destHead, lists[i]);
        }
    }
    return destHead;
}
//# sourceMappingURL=merge-k-sorted-lists.js.map