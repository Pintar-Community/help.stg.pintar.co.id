#!/bin/bash

function cleanup() {
    # en or id
    LANG=$1
    # directory in contents
    SOURCE=$2
    # destination folder in i18n
    DESTINATION=$3
    # Source Folder Base
    SOURCE_BASE=$(basename $SOURCE)
    # Sub Docs
    SUB_DOCS=false

    if [[ $DESTINATION == *"docs"* ]]; then
        SUB_DOCS=true
        DESTINATION="$DESTINATION/current/$SOURCE_BASE"

        if [ -d "$DESTINATION" ]; then
            echo "Folder $DESTINATION Exist, Cleanup Folder"
            rm -rf "$DESTINATION"
        fi
        
        echo "Folder $SOURCE Exist, Cleanup Folder"
        rm -rf "$SOURCE"
    else
        rm -rf "$DESTINATION/*"
    fi
}

i18n="i18n"
blog="blog"

##### Blog Posts #####

echo "Cleanup Blog Posts"

rm -rf "$blog/*.md"

echo "Copy Files Translations English to Destination Folder"

BLOG_PATH_DESTINATION="docusaurus-plugin-content-blog"
EN_BLOG_DESTINATION="$i18n/en/$BLOG_PATH_DESTINATION"
ID_BLOG_DESTINATION="$i18n/id/$BLOG_PATH_DESTINATION"

DOCS_PATH_DESTINATION="docusaurus-plugin-content-docs"
EN_DOCS_DESTINATION="$i18n/en/$DOCS_PATH_DESTINATION"
ID_DOCS_DESTINATION="$i18n/id/$DOCS_PATH_DESTINATION"

echo "Check Multiple Folder Blog Translations"

# Copy Blog Eng
cleanup en blog $EN_BLOG_DESTINATION
cleanup id blog $ID_BLOG_DESTINATION

# migrateFiles en docs $EN_DOCS_DESTINATION
# migrateFiles id docs $ID_DOCS_DESTINATION

LIST_CATEGORIES="enterprise opportunity degrees skills prakerja lms userprofile others faq"

# Loop List Categories
for CATEGORY in $LIST_CATEGORIES
do
    echo "Check Multiple Folder Docs Translations"

    cleanup en docs/$CATEGORY $EN_DOCS_DESTINATION
    cleanup id docs/$CATEGORY $ID_DOCS_DESTINATION
done

rm -rf list-*.txt