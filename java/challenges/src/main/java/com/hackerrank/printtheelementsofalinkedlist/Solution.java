// https://www.hackerrank.com/challenges/print-the-elements-of-a-linked-list

package com.hackerrank.printtheelementsofalinkedlist;

import java.util.*;

public class Solution {
    static List<Integer> printLinkedList(SinglyLinkedListNode head) {
        List<Integer> list = new ArrayList<>();

        while (head != null) {
          list.add(head.data);
          head = head.next;
        }

        return list;
    }

    public static void main(String[] args) { }
}
